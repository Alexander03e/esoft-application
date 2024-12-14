import { useForm } from '@/Shared/hooks/useForm';
import { EValidationStatus, IForm } from '@/Shared/types/form';
import { Box, Button, TextField, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { FormEvent, useState } from 'react';

type Props<T> = IForm<T> & {
    defaultValues?: Partial<T>;
    onSubmit?: () => void;
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
    onSubmit,
    customOnSubmit,
}: Props<T>) {
    const { register, formData } = useForm<Record<string, string>>({ defaultValues });
    const [error, setError] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (customOnSubmit) {
            const data = customOnSubmit(formData as T);

            if (data && data?.status === EValidationStatus.ERROR) {
                setError(data.msg || 'Проверьте правильность введенных полей.');

                return;
            }
        }

        setError('');

        if (onSubmit) {
            onSubmit();
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
                {inputs.map(input => (
                    <TextField
                        {...register(input.name as string)}
                        color='info'
                        label={input.placeholder ?? ''}
                        type={input?.type || 'text'}
                    />
                ))}
            </Box>

            {error && <Typography color={red[300]}>{error}</Typography>}

            <Button type='submit' variant='contained'>
                {submitButton?.label || 'Отправить'}
            </Button>
        </Box>
    );
}
