/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useMedia } from '@/Shared/hooks/useBreakpoints';
import { useForm } from '@/Shared/hooks/useForm';
import { EValidationStatus, IForm, IInput } from '@/Shared/types/form';
import { Box, Button, MenuItem, Select, Snackbar, TextField, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { FormEvent, useEffect, useState } from 'react';

type Props<T> = IForm<T> & {
    defaultValues?: Partial<T>;
    handleSend?: (data: T) => void;
    submitButton?: {
        label: string;
    };
    customFields?: Record<string, string>;
    specialAreaType?: string;
    dynamicInputs?: (data: T, setInputs: (inputs: IInput<unknown>[]) => void) => void;
    resetOnFinish?: boolean;
    queryOptions?: {
        baseUrl?: string;
        method?: 'POST' | 'PUT' | 'GET';
        onSuccess?: () => void;
        onError?: () => void;
        onFinish?: () => void;
    };
};

export function FormBuilder<T extends { [K in keyof T]: string }>({
    inputs,
    submitButton,
    defaultValues,
    handleSend,
    customOnSubmit,
    customFields,
    resetOnFinish,
    dynamicInputs,
    specialAreaType,
}: Props<T>) {
    const { register, formData, resetForm } = useForm<Record<string, string>>({ defaultValues });
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [formInputs, setFormInputs] = useState(inputs);
    const { isDesktop } = useMedia();
    console.log(formInputs);
    useEffect(() => {
        if (dynamicInputs) {
            dynamicInputs(formData as T, setFormInputs);
        }
    }, [formData]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        try {
            const filteredFormData = formData;
            // const filteredFormData = Object.keys(formData).reduce((obj, key) => {
            //     if (key === 'id') return obj;
            //     if (formInputs.some(input => input.name === key)) {
            //         obj[key] = formData[key];
            //     } else {
            //         obj[key] = ' ';
            //     }

            //     return obj;
            // }, {});

            if (specialAreaType) {
                filteredFormData['type'] = specialAreaType;
            }

            if (customFields) {
                Object.entries(customFields).map(([key, value]) => {
                    if (!value) return;
                    filteredFormData[key] = value;
                });
            }

            if (customOnSubmit) {
                const data = customOnSubmit(filteredFormData as T);

                if (data && data?.status === EValidationStatus.ERROR) {
                    setError(data.msg || 'Проверьте правильность введенных полей.');

                    return;
                }
            }

            setError('');

            if (handleSend) {
                console.log(filteredFormData, 'FILTERED');
                console.log(formData, 'FORM');
                handleSend(filteredFormData as T);
                setOpenSnackbar(true);
                if (resetOnFinish) {
                    resetForm();
                }
            }
        } catch {
            setError('Произошла ошибка при отправке данных.');
        }
    };

    return (
        <Box onSubmit={handleSubmit} component='form' display='flex' gap={4} flexDirection='column'>
            <Box
                display='grid'
                width='100%'
                flexDirection='column'
                gridTemplateColumns={isDesktop ? '1fr 1fr' : '1fr'}
                gap={4}
            >
                {formInputs?.map(input => {
                    let label = input?.placeholder;
                    if (input?.min) label += ` (от ${input.min}`;
                    if (input?.max) label += ` до ${input.max})`;

                    // let disabled = false
                    // if (input.activeIf && formData[input.name as string]) {
                    //     const active = input.activeIf.some(
                    //         activeInput =>
                    //             formData[activeInput.name as string] === activeInput.value,
                    //     );

                    //     if (!active)
                    // }

                    if (input.type === 'select' && input?.selects) {
                        return (
                            <Select
                                {...register(input.name as string)}
                                label={input.placeholder ?? ''}
                                defaultValue={input.selects[0]}
                                color='info'
                            >
                                {input.selects.map((option, index) => {
                                    const formattedOption = input?.translateOptions
                                        ? input.translateOptions[index]
                                        : option;
                                    return (
                                        <MenuItem key={option} value={option}>
                                            {formattedOption}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        );
                    }
                    return (
                        <TextField
                            {...register(input.name as string)}
                            color='info'
                            sx={{
                                input: {
                                    '&:disabled': {
                                        background: '#ebedf0',
                                    },
                                },
                            }}
                            slotProps={{
                                input: { inputProps: { min: input.min, max: input.max } },
                            }}
                            required={input.required}
                            label={label ?? ''}
                            type={input?.type || 'text'}
                            onInput={e => {
                                // @ts-ignore
                                const numericValue = parseFloat(e.target.value);

                                if (
                                    input?.max &&
                                    !isNaN(numericValue) &&
                                    numericValue > Number(input?.max)
                                ) {
                                    // @ts-ignore
                                    e.target.value = input.max;
                                }

                                if (
                                    input?.min &&
                                    !isNaN(numericValue) &&
                                    numericValue < Number(input?.min)
                                ) {
                                    // @ts-ignore
                                    e.target.value = input.min;
                                }
                            }}
                        />
                    );
                })}
            </Box>

            {error && <Typography color={red[300]}>{error}</Typography>}

            <Button type='submit' variant='contained'>
                {submitButton?.label || 'Отправить'}
            </Button>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                message='Данные отправлены'
                onClose={() => setOpenSnackbar(false)}
            />
        </Box>
    );
}
