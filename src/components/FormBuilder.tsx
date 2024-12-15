/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useForm } from '@/Shared/hooks/useForm';
import { EValidationStatus, IForm } from '@/Shared/types/form';
import { Box, Button, MenuItem, Select, Snackbar, TextField, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { FormEvent, useState } from 'react';

type Props<T> = IForm<T> & {
    defaultValues?: Partial<T>;
    handleSend?: (data: T) => void;
    submitButton?: {
        label: string;
    };
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
}: Props<T>) {
    console.log(defaultValues);
    const { register, formData, resetForm } = useForm<Record<string, string>>({ defaultValues });
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        try {
            if (customOnSubmit) {
                const data = customOnSubmit(formData as T);

                if (data && data?.status === EValidationStatus.ERROR) {
                    setError(data.msg || 'Проверьте правильность введенных полей.');

                    return;
                }
            }

            setError('');

            if (handleSend) {
                handleSend(formData as T);
                setOpenSnackbar(true);
                resetForm();
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
                gridTemplateColumns='1fr 1fr'
                gap={4}
            >
                {inputs.map(input => {
                    let label = input?.placeholder;
                    if (input?.min) label += ` (от ${input.min}`;
                    if (input?.max) label += ` до ${input.max})`;

                    if (input.type === 'select' && input?.selects) {
                        return (
                            <Select
                                {...register(input.name as string)}
                                label={input.placeholder ?? ''}
                                defaultValue={input.selects[0]}
                                color='info'
                            >
                                {input.selects.map(option => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        );
                    }
                    return (
                        <TextField
                            {...register(input.name as string)}
                            color='info'
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
