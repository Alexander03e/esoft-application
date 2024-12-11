import { useForm } from '@/Shared/hooks/useForm';
import { useAppStore } from '@/Store/index';
import { Box, Button, TextField } from '@mui/material';
import { FormEvent, useEffect } from 'react';

export const ClientCreate = () => {
    const { setWindow } = useAppStore();
    const { register, formData, resetForm } = useForm();
    useEffect(() => {
        setWindow('Создание пользователя');

        return () => {
            setWindow(null);
        };
    }, []);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <Box onSubmit={onSubmit} component='form' display='flex' gap={4} flexDirection='column'>
            <Box
                display='grid'
                width='100%'
                flexDirection='column'
                gridTemplateColumns='1fr 1fr'
                gap={4}
            >
                <TextField {...register('name')} label='Имя' color='info' />
                <TextField {...register('surname')} label='Фамилия' color='info' />
                <TextField {...register('lastName')} label='Отчество' color='info' />
                <TextField {...register('phone')} label='Номер телефона' color='info' />
                <TextField
                    {...register('email')}
                    required
                    label='E-mail'
                    color='info'
                    type='email'
                />
            </Box>
            <Button type='submit' variant='contained'>
                Создать
            </Button>
        </Box>
    );
};
