import { Show } from '@/Components/Show.tsx';
import { useParams } from 'react-router-dom';
import { IAgent } from './types.ts';
import { Box, Typography } from '@mui/material';
import { useData } from '@/Shared/api/hooks.tsx';
import { ISuggestionListItem } from '../Suggestion/types.ts';
import { ENTITIES } from '@/Shared/consts';
import { IRequirementResponse } from '../Requirement/types.ts';
import { Loader } from '@/Shared/components/ui/Loader.tsx';
import { SuggestionCard } from '../Suggestion/components/Card.tsx';
import { RequirementCard } from '../Requirement/components/Card.tsx';

export const ShowAgent = () => {
    const { id } = useParams();

    const { data: suggestionsData, isLoading: sLoading } = useData<ISuggestionListItem[]>({
        resource: ENTITIES.AGENT,
        additionalUrl: `/suggestions/${id}`,
    });
    const { data: requirementData, isLoading: rLoading } = useData<IRequirementResponse[]>({
        resource: ENTITIES.AGENT,
        additionalUrl: `/requirements/${id}`,
    });

    return (
        <>
            <Show
                id={id}
                resource='agent'
                render={(data: IAgent) => {
                    return (
                        <div>
                            <Typography>Агент {data?.id}</Typography>
                            <br />
                            <Typography>Имя: {data?.firstname}</Typography>
                            <Typography>Фамилия: {data?.lastname}</Typography>
                            <Typography>Отчество: {data?.patronymic}</Typography>
                            <Typography>Телефон: {data?.proportion}</Typography>
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
