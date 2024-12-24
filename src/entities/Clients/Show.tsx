import { useParams } from 'react-router-dom';
import { Show } from '@/Components/Show.tsx';
import { IClient } from './types.ts';
import { Box, Typography } from '@mui/material';
import { useData } from '@/Shared/api/hooks.tsx';
import { ENTITIES } from '@/Shared/consts';
import { ISuggestionListItem } from '../Suggestion/types.ts';
import { SuggestionCard } from '../Suggestion/components/Card.tsx';
import { IRequirementResponse } from '../Requirement/types.ts';
import { RequirementCard } from '../Requirement/components/Card.tsx';
import { Loader } from '@/Shared/components/ui/Loader.tsx';

export const ShowClients = () => {
    const { id } = useParams();
    const { data: suggestionsData, isLoading: sLoading } = useData<ISuggestionListItem[]>({
        resource: ENTITIES.CLIENT,
        additionalUrl: `/suggestions/${id}`,
    });
    const { data: requirementData, isLoading: rLoading } = useData<IRequirementResponse[]>({
        resource: ENTITIES.CLIENT,
        additionalUrl: `/requirements/${id}`,
    });

    return (
        <>
            <Show
                resource='client'
                id={id}
                render={(data: IClient) => {
                    return (
                        <div>
                            <Typography>Клиент {data?.id}</Typography>
                            <br />
                            <Typography>Имя: {data?.firstname}</Typography>
                            <Typography>Фамилия: {data?.lastname}</Typography>
                            <Typography>Отчество: {data?.patronymic}</Typography>
                            <Typography>Телефон: {data?.phone}</Typography>
                            <Typography>Email: {data?.email}</Typography>
                        </div>
                    );
                }}
            />
            <Box mt={4}>
                {rLoading || (sLoading && <Loader />)}
                {Boolean(suggestionsData && suggestionsData?.length) && (
                    <Box>
                        <Typography mb={2}>Предложения</Typography>
                        {suggestionsData?.map((suggestion: ISuggestionListItem) => (
                            <SuggestionCard {...suggestion} />
                        ))}
                    </Box>
                )}
                {Boolean(requirementData && requirementData?.length) && (
                    <Box mt={4}>
                        <Typography mb={2}>Потребности</Typography>
                        {requirementData?.map((requirement: IRequirementResponse) => (
                            <RequirementCard {...requirement} />
                        ))}
                    </Box>
                )}
            </Box>
        </>
    );
};
