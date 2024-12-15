import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import map from 'lodash/map';
import * as React from 'react';
import { useAppStore } from '../store';
import { TRANSLATES } from '@/Shared/consts';

const ITEM_HEIGHT = 48;

interface IProps {
    targetElement?: React.ReactNode;
    elements: React.ReactElement[];
    label?: string;
}

export const DropList = ({ targetElement, elements = [], label }: IProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        // e.stopPropagation();
        setAnchorEl(null);
    };
    const { resource } = useAppStore();

    const resourceLabel = resource ? TRANSLATES[resource]['create'] || '' : '';

    return (
        <div>
            {targetElement || (
                <Button
                    variant='contained'
                    endIcon={<MoreVertIcon />}
                    onClick={handleClick}
                    color='info'
                >
                    {label || resourceLabel}
                </Button>
            )}
            <Menu
                sx={{ ul: { paddingBlock: '12px' } }}
                id='long-menu'
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        style: {
                            boxShadow:
                                '0px 8px 24px 0px rgba(4, 22, 43, 0.12), 0px 0px 4px 0px rgba(4, 22, 43, 0.04)',
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                            borderRadius: '8px',
                        },
                    },
                }}
            >
                {map(elements, option => option)}
            </Menu>
        </div>
    );
};
