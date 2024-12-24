// @ts-nocheck
import { Box, Button, SelectChangeEvent, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { KeyboardBackspace } from '@mui/icons-material';
import { ENTITIES } from '@/Shared/consts';
import { AsyncSelect } from '@/Components/AsyncSelect.tsx';
import { Inputs } from './Inputs.tsx';
import { useEffect, useState } from 'react';
import { useData } from '@/Shared/api/hooks.tsx';
import { Loader } from '@/Shared/components/ui/Loader.tsx';
import { Empty } from '@/Shared/components/ui/Empty.tsx';
import { SuggestionCard } from '../Suggestion/components/Card.tsx';
import { RequirementCard } from '../Requirement/components/Card.tsx';
import { useCreateStore } from '@/Store/createSlice';

export const TransactionSearch = () => {
    const { search } = useLocation();
    const [value, setValue] = useState<number | string>();
    const navigate = useNavigate();
    const entity = search.split('=')[1];
    const { options, setDefaultValues } = useCreateStore();

    useEffect(() => {
        if (value) {
            setDefaultValues({
                [entity]: value,
            });
        }
    }, [value]);

    console.log(options, 'OPTIONS');

    const searchEntity =
        entity === ENTITIES.SUGGESTION ? ENTITIES.REQUIREMENT : ENTITIES.SUGGESTION;

    const { data, isLoading } = useData<any[]>({
        resource: ENTITIES.TRANSACTION,
        // resource: searchEntity,
        additionalUrl: `/${entity}/${value}`,
    });

    const onBack = () => {
        navigate(-1);
    };

    const handleChange = (e: SelectChangeEvent<unknown>) => {
        // @ts-ignore
        setValue(e?.target.value);
    };

    const title = entity === ENTITIES.SUGGESTION ? 'предложению' : 'потребности';

    const select = Inputs.find(input => input.name === entity)!;

    const ComponentCard = entity !== ENTITIES.SUGGESTION ? SuggestionCard : RequirementCard;

    return (
        <Box display='flex' flexDirection='column' gap={3}>
            <Box display='flex' alignItems={'center'} gap={2} mb={4}>
                <Button
                    onClick={onBack}
                    sx={{ span: { margin: '0' } }}
                    startIcon={<KeyboardBackspace />}
                    variant='contained'
                    color='primary'
                />
                <Typography variant='h1' fontWeight={600}>
                    Поиск по {title}
                </Typography>
            </Box>
            <Box>
                <AsyncSelect
                    selectProps={{
                        value,
                        onChange: e => handleChange(e),
                    }}
                    {...select}
                />
            </Box>
            <Box display='flex' flexDirection='column' gap={2}>
                {isLoading && <Loader />}
                {data && data?.length && !isLoading ? (
                    data?.map(item => <ComponentCard isSelectable {...item} />)
                ) : (
                    <Empty title={'Данные не найдены'} />
                )}
            </Box>
        </Box>
    );
};
