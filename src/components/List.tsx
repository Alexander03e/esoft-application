/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Grid2 as Grid } from '@mui/material';
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
import map from 'lodash/map';

interface IProps {
    toolbarComponent?: ReactNode;
    create?: boolean;
    children?: ReactNode;
    search?: boolean;
    customCreate?: ReactNode;
    listId?: string;
    filters?: Record<string, IFilter[]>;
    onDataLoad?: (data: [] | undefined) => void;
    columns?: number;
    toolbarElements?: ReactNode;
    // @ts-ignore
    /* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-explicit-any */
    renderItem?: (data: any) => ReactElement;
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
                         renderItem,
                         toolbarElements,
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
    const Item = renderItem;
    const arrayData = data as unknown[];

    return (
        <Box position="relative" height="100%" display="flex" flexDirection="column">
            {toolbarComponent ? (
                toolbarComponent
            ) : (
                <Toolbar name={resource ? TRANSLATES?.[resource].index : ''}>
                    {search && <SearchInput onSearched={setSearchValue} />}
                    {customCreate ?? (create && <CreateButton />)}
                    {toolbarElements}
                </Toolbar>
            )}
            {filters && (
                <Toolbar
                    closeTitle="Закрыть фильтры"
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
                {renderItem && Item && arrayData?.length &&
                    <Grid container gap={2}>
                        {map(arrayData, (item, index) => <Grid
                                sx={{
                                    xs: 12,
                                    sm: 6,
                                    md: 3.88,
                                    lg: 3.4,
                                    // minWidth: '31.3%',
                                    // maxWidth: '32.3%',
                                    flex: '1 1 auto',
                                }}
                                key={index}
                                // @ts-ignore
                            ><Item {...item} /></Grid>,
                        )}
                    </Grid>
                }
                {isLoading ? <Loader /> : isEmpty ? <Empty /> : children}
            </Box>
        </Box>
    );
};
