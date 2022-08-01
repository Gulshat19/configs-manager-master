import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton, Typography, List, ListItem, ListItemText, Divider, Popover, styled, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import DeleteModal from './DeleteModal';

const ListStyle = {
    width: 256,
    margin: 0,
    padding: 0,
    bgcolor: 'background.paper',
};

const PopoverText = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    padding: '10px',
    borderBottom: '2px solid rgba(0, 0, 0, 0.2)'
}));

const EditTabIconButton = styled(IconButton)(({ theme }) => ({
    marginLeft: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 5px;',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 10px;'
    }
}));

const TabEdit = ({ setConfigure, configure }: { setConfigure: Function, configure: Config }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteTab = (name: string) => {
        setConfigure({
            sections: configure.sections.filter((s: Section) => s.name !== name)
        })
        handleClose();
    }

    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <EditTabIconButton
                        aria-label="delete"
                        size="medium"
                        disabled={configure.sections.length ? false : true}
                        {...bindTrigger(popupState)}
                    >
                        <EditIcon />
                    </EditTabIconButton>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <PopoverText variant="caption" display="block">
                            Click to edit section name
                        </PopoverText>
                        <List sx={ListStyle} component="nav">
                            {configure.sections.map((s: Section) => {
                                return (
                                    <Box key={s.name}>
                                        <ListItem>
                                            <ListItemText primary={
                                                <OutlinedInput
                                                    size='small'
                                                    sx={{ mr: 1 }}
                                                    defaultValue={s.name}
                                                />
                                            }
                                            />
                                            <IconButton component="label" onClick={handleOpen}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItem>
                                        <Divider />
                                        <DeleteModal
                                            open={open}
                                            onClose={handleClose}
                                            onDelete={() => deleteTab(s.name)}
                                        />
                                    </Box>
                                )
                            })}
                        </List>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}

export default TabEdit;