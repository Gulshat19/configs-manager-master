import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, Typography, List, ListItem, ListItemText, Divider, Popover, styled } from '@mui/material';

const style = {
    width: 256,
    margin: 0,
    padding: 0,
    bgcolor: 'background.paper',
};

const DeleteTabIconButton = styled(IconButton)(({ theme }) => ({
    marginLeft: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 5px;',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
}));

const TabDelete = (props: any) => {

    const { tabs, setTabs } = props;

    const deleteTab = (name: string) => {
        setTabs(tabs.filter((t: any) => t.name !== name))
    }

    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <DeleteTabIconButton
                        aria-label="delete"
                        size="medium"
                        {...bindTrigger(popupState)}
                    >
                        <DeleteIcon />
                    </DeleteTabIconButton>
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
                        <Typography
                            variant="overline"
                            display="block"
                            sx={{
                                textAlign: 'center',
                                mt: 0.5,
                                borderBottom: '5px solid #140D27'
                            }}>
                            Delete secton
                        </Typography>
                        <List sx={style} component="nav">
                            {tabs.map((t: any) => {
                                return (
                                    <Box key={t.name}>
                                        <ListItem button onClick={() => deleteTab(t.name)}>
                                            <ListItemText primary={t.name} />
                                        </ListItem>
                                        <Divider />
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

export default TabDelete;