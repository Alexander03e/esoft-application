/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box } from '@mui/material';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { Toolbar } from './Toolbar';
import { CreateButton } from './buttons/CreateButton';
import { TRANSLATES } from '@/Shared/consts';
import { useAppStore } from '../store';
import { Empty } from '@/Shared/components/ui/Empty';
import { Loader } from '@/Shared/components/ui/Loader';
import { useData } from '@/Shared/api/hooks';
import { SearchInput } from '@/Shared/components/ui/SearchInput';
import { DropFilter } from './DropFilter';
import { IFilter } from '@/Shared/types/form';

interface IProps {
    toolbarComponent?: ReactNode;
    create?: boolean;
    children?: ReactNode;
    search?: boolean;
    customCreate?: ReactNode;
    listId?: string;
    filters?: Record<string, IFilter[]>;
    onDataLoad?: (data: [] | undefined) => void;
}

export const List = ({
    toolbarComponent,
    create = true,
    children,
    filters,
    search,
    listId,
    onDataLoad,
    customCreate,
}: IProps): ReactElement => {
    const { resource } = useAppStore();
    const [searchValue, setSearchValue] = useState('');
    const [currentFilters, setCurrentFilters] = useState<Record<string, IFilter>>({});
    const [filtersOpen, setFiltersOpen] = useState(false);
    const filtersFormatted = Object.fromEntries(
        Object.entries(currentFilters).map(([key, filter]) => [key, filter?.value]),
    );

    const { data, isLoading, isError } = useData({
        resource: resource!,
        search: searchValue,
        filters: filtersFormatted,
        id: listId ? +listId : undefined,
    });
    // @ts-ignore
    const isEmpty = !data || !data?.length || isError;

    useEffect(() => {
        if (onDataLoad) {
            // @ts-ignore
            onDataLoad(data);
        }
    }, [data]);

    const getLabel = (label: string) => {
        switch (label) {
            case 'type':
                return 'Тип';
            default:
                return 'Выберите значение';
        }
    };

    return (
        <Box position='relative' height='100%' display='flex' flexDirection='column'>
            {toolbarComponent ? (
                toolbarComponent
            ) : (
                <Toolbar name={resource ? TRANSLATES?.[resource].index : ''}>
                    {search && <SearchInput onSearched={setSearchValue} />}
                    {customCreate ?? (create && <CreateButton />)}
                </Toolbar>
            )}
            {filters && (
                <Toolbar
                    closeTitle='Закрыть фильтры'
                    open={filtersOpen}
                    onToggle={() => setFiltersOpen(prev => !prev)}
                    openTitle={filters ? 'Открыть фильтры' : ''}
                    sx={{ mt: 2 }}
                >
                    {filters &&
                        Object.entries(filters).map(([key, values]) => {
                            const handleChange = (value: IFilter | null) => {
                                console.log(value);
                                if (value === null) {
                                    setCurrentFilters(prev => {
                                        const newFilters = { ...prev };
                                        delete newFilters[key];
                                        return newFilters;
                                    });
                                } else {
                                    // Устанавливаем новое значение фильтра
                                    setCurrentFilters(prev => ({ ...prev, [key]: value }));
                                }
                            };

                            const label = getLabel(key);

                            return (
                                <DropFilter
                                    value={currentFilters?.[key] || null}
                                    fields={values}
                                    label={label}
                                    // @ts-ignore
                                    onChange={handleChange}
                                />
                            );
                        })}
                </Toolbar>
            )}
            <Box sx={{ height: '100%' }} mt={4}>
                {isLoading ? <Loader /> : isEmpty ? <Empty /> : children}
            </Box>
        </Box>
    );
};
