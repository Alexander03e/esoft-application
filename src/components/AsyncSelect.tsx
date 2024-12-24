// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { IInput } from '@/Shared/types/form.ts';
import { ReactElement } from 'react';
import { Box, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';
import { useData } from '@/Shared/api/hooks.tsx';
import { Loader } from '@/Shared/components/ui/Loader.tsx';

type Props = IInput<unknown> & {
    selectProps?: SelectProps
}

export const AsyncSelect = ({ selectProps, ...input }: Props): ReactElement | null => {
    const query = input.query;
    const { data } = useData({ resource: query?.source, method: 'GET' });
    if (!data) return <Loader />;


    return <Box display="flex" flexDirection="column">

        {input?.placeholder && (
            <InputLabel>{input?.placeholder}</InputLabel>
        )}
        <Select
            {...selectProps}
            label={input.placeholder ?? ''}
            defaultValue={data[0][query?.key]}
            color="info"
            required={input.required}
        >
            {data?.map((option) => {
                return (
                    <MenuItem key={option[query?.key]} value={option[query?.key]}>
                        {option[query?.label]}
                    </MenuItem>
                );
            })}
        </Select>
    </Box>;
};
