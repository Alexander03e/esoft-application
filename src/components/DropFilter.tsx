import { IFilter } from '@/Shared/types/form';
import { Box, Button, InputLabel, MenuItem, Select, Typography } from '@mui/material';

interface IProps {
    fields: IFilter[];
    onChange: (value: unknown) => void;
    value: IFilter;
    label?: string;
}

export const DropFilter = ({ fields, value, onChange, label }: IProps) => {
    const handleReset = () => {
        onChange(null);
    };

    return (
        <Box display='flex' flexDirection='column'>
            <InputLabel sx={{ color: '#344954', fontWeight: 600 }}>{label}</InputLabel>
            <Select<IFilter>
                displayEmpty
                renderValue={(selected: IFilter | null) => {
                    if (!selected) {
                        return (
                            <Typography color='gray'>Выберите {label?.toLowerCase()}</Typography>
                        );
                    }
                    return selected.label;
                }}
                value={value || null}
                sx={{ '& > div': { padding: 1, minWidth: '100px' } }}
                onChange={e => {
                    const selectedValue = e.target.value;
                    const selectedFilter = fields.find(option => option.value === selectedValue);
                    if (selectedFilter) {
                        onChange(selectedFilter);
                    }
                }}
                color='info'
            >
                {fields.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            <Button
                onClick={handleReset}
                color='secondary'
                sx={{
                    fontWeight: 400,
                    fontSize: '12px',
                    mt: 0.5,
                    color: '#d42c37',
                    padding: 0,
                }}
            >
                Сбросить
            </Button>
        </Box>
    );
};
