import { IInput } from '@/Shared/types/form';
import { FormBuilder } from './FormBuilder';
import { Box, Button, Typography } from '@mui/material';
import { ComponentProps, ReactNode, useEffect } from 'react';
import { useData, useEdit } from '@/Shared/api/hooks';
import { useAppStore } from '../store';
import { useNavigate, useParams } from 'react-router-dom';
import { EWindowType } from '@/Store/types';
import { TRANSLATES } from '@/Shared/consts';
import { KeyboardBackspace } from '@mui/icons-material';

interface IProps {
    inputs: IInput<unknown>[];
    customForm?: ReactNode;
    children?: ReactNode;
    formProps?: Omit<ComponentProps<typeof FormBuilder>, 'inputs'>;
    onDefaultDataLoad?: (data: any) => void;
    onlyCustomDefaultData?: boolean;
}

export const Edit = ({ inputs, formProps, children, customForm, onDefaultDataLoad, onlyCustomDefaultData }: IProps) => {
    const { resource } = useAppStore();
    const { id } = useParams();
    const { data: defaultData } = useData({ resource: resource!, id: +id! });
    const { mutateAsync } = useEdit({ resource: resource!, id: +id! });
    const navigate = useNavigate();

    const onBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        if (onDefaultDataLoad && defaultData) {
            onDefaultDataLoad(defaultData);
        }
    }, [defaultData]);

    // Форматированный тайтл редактирования
    const TITLE = `Редактирование ${
        TRANSLATES[resource ?? ''][EWindowType.EDIT.toString().toLowerCase()] ?? ''
    }`;

    const defaultProps = onlyCustomDefaultData ? formProps?.defaultValues : formProps?.defaultValues || (defaultData as Record<string, string>);


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
                    handleSend={mutateAsync as any}
                    inputs={inputs}
                    defaultValues={
                        defaultProps}
                    {...formProps}
                />
            ) : (
                customForm
            )}
            {children}
        </Box>
    );
};
