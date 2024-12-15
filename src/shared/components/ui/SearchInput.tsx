import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

type Props = TextFieldProps & {
    onSearchClick?: () => void;
    onSearched?: (value: string) => void;
};

export const SearchInput = ({ onSearchClick, onSearched, ...props }: Props) => {
    const [searchValue, setSearchValue] = useState('');

    const debouncedSearch = useCallback(
        debounce((value: string) => {
            if (onSearched) {
                const clearedValue = value.replace(/\s+/g, '');
                onSearched(clearedValue);
            }
        }, 700),
        [],
    );

    useEffect(() => {
        debouncedSearch(searchValue);
        return () => {
            debouncedSearch.cancel();
        };
    }, [searchValue, debouncedSearch]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <TextField
            placeholder='Поиск'
            onChange={handleChange}
            value={searchValue}
            {...props}
            sx={{ input: { padding: 1, height: '100%' } }}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={onSearchClick}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
};
