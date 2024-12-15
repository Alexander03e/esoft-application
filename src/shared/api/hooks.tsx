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
    search?: string;
}

export function useData<T>({ resource, id, search }: IProps): UseQueryResult<T> {
    const queryKey = [resource];

    if (id) queryKey.push(String(id));
    if (search) queryKey.push(search);

    return useQuery({
        queryKey: queryKey,
        queryFn: () => fetcher({ resource, id: id, method: 'GET', search }),
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

export function useDelete<T>({ resource, id }: IProps): UseMutationResult<T> {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: [resource],
        mutationFn: () => fetcher({ resource, method: 'DELETE', id }),
        onSuccess: () => {
            console.log('success');
            queryClient.setQueryData<T[]>([resource], oldData => {
                if (!oldData) return [];
                console.log(oldData);
                // @ts-ignore
                return oldData.filter(item => item?.id !== id);
            });
            queryClient.invalidateQueries({ queryKey: resource });
            // @ts-ignore
        },
    });
}
