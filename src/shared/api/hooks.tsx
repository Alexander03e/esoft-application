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
    filters?: Record<string, string>;
    withKey?: boolean;
    resourceId?: string;
}

interface IDataProps extends IProps {
    additionalUrl?: string;
}

export function useData<T>({
    resource,
    id,
    search,
    filters,
    additionalUrl,
}: IDataProps): UseQueryResult<T> {
    const queryKey = [resource];
    const paramsSplitted = additionalUrl?.split('/') || null;
    if (id) queryKey.push(String(id));
    if (search) queryKey.push(search);

    if (paramsSplitted) {
        queryKey.push(...paramsSplitted);
    }

    return useQuery({
        queryKey: queryKey,
        queryFn: () => fetcher({ resource, id: id, method: 'GET', search, additionalUrl }),
        enabled: !!resource && queryKey.every(item => item !== 'undefined'),
        select: (data: T) => {
            if (!filters) return data;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return (data as any).filter((item: any) => {
                return Object.entries(filters || {}).every(([key, value]) => {
                    return item[key] === value;
                });
            });
        },
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

export function useDelete<T>({ resource, id, resourceId }: IProps): UseMutationResult<T> {
    const queryKey = resourceId ? [resource, '52'] : [resource];

    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: queryKey,
        mutationFn: () => fetcher({ resource, method: 'DELETE', id }),
        onSuccess: () => {
            console.log('success');
            queryClient.setQueryData<T[]>(queryKey, oldData => {
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
