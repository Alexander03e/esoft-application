import { Box, Button, Typography } from '@mui/material';
import { ComponentProps, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store';
import { EWindowType } from '@/Store/types';
import { KeyboardBackspace } from '@mui/icons-material';
import { TRANSLATES } from '@/Shared/consts';
import { useCreate } from '@/Shared/api/hooks';
import { FormBuilder } from './FormBuilder';
import { IInput } from '@/Shared/types/form';
import { useCreateStore } from '@/Store/createSlice';

interface IProps {
    inputs: IInput<unknown>[];
    children?: ReactNode;
    customForm?: ReactNode;
    customLabel?: string;
    formProps?: Omit<ComponentProps<typeof FormBuilder>, 'inputs'>;
}

export const Create = ({ children, inputs, customLabel, customForm, formProps }: IProps) => {
    const navigate = useNavigate();
    const { setContent, resource } = useAppStore();
    const { options } = useCreateStore();
    const { defaultValues: formPropsDefaultValues, ...formRestProps } = formProps || {};

    useEffect(() => {
        setContent({ name: '', action: EWindowType.CREATE });
    }, []);

    const onBack = () => {
        navigate(-1);
    };

    const TITLE =
        customLabel ||
        `Создание ${TRANSLATES[resource ?? ''][EWindowType.CREATE.toString().toLowerCase()] ?? ''}`;

    const { mutateAsync } = useCreate({ resource: resource! });

    const defaultValues = formPropsDefaultValues || options?.defaultValues;

    return (
        <Box display="flex" flexDirection="column" gap="14px">
            <Box display="flex" alignItems={'center'} gap={2} mb={4}>
                <Button
                    onClick={onBack}
                    sx={{ span: { margin: '0' } }}
                    startIcon={<KeyboardBackspace />}
                    variant="contained"
                    color="primary"
                />
                <Typography variant="h1" fontWeight={600}>
                    {TITLE}
                </Typography>
            </Box>
            {!customForm ? (
                <FormBuilder
                    resetOnFinish
                    handleSend={mutateAsync as any}
                    inputs={inputs}
                    defaultValues={defaultValues}
                    {...formRestProps}
                />
            ) : (
                customForm
            )}
            {children}
        </Box>
    );
};
