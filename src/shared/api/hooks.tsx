/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
    useMutation,
    UseMutationResult,
    useQuery,
    useQueryClient,
    UseQueryResult,
} from '@tanstack/react-query';
import { fetcher } from '.';

interface IProps {
    resource: string;
    id?: number;
}

export function useData<T>({ resource, id }: IProps): UseQueryResult<T> {
    return useQuery({
        queryKey: [resource, id],
        queryFn: () => fetcher({ resource, id: id, method: 'GET' }),
        enabled: !!resource,
    });
}

export function useCreate<T>({ resource }: IProps): UseMutationResult<T> {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: data => fetcher({ resource, method: 'POST', upload: data }),
        onSuccess: newData => {
            queryClient.invalidateQueries({ queryKey: resource });

            queryClient.setQueryData([resource], oldData => {
                if (!oldData) return [newData];

                // @ts-ignore
                return [...oldData, newData];
            });
        },
    });
}

export function useEdit<T>({ resource, id }: IProps): UseMutationResult<T> {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: [resource, id],
        mutationFn: data => fetcher({ resource, method: 'PUT', upload: data }),
        onSuccess: newData => {
            queryClient.invalidateQueries({ queryKey: resource });

            queryClient.setQueryData([resource, id], oldData => {
                if (!oldData) return [newData];

                // @ts-ignore
                return newData;
            });
        },
    });
}
