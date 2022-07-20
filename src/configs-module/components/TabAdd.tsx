import { useState } from 'react';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { styled, TextField, Button, Popover, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';


const AddTabButton = styled(Button)(({ theme }) => ({
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: '8ch',
    height: '48px'
}))

const AddTabIconButton = styled(IconButton)(({ theme }) => ({
    marginLeft: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 5px;',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
}));


const TabAdd = (props: any) => {
    const { tabs, setTabs } = props;
    const [tabName, setTabName] = useState('');

    const handleTabChange = (e: any) => {
        setTabName(e.target.value);
    }

    const addTab = (name: string) => {
        const newTab = {
            _id: uuidv4(),
            name,
        }
        setTabs([...tabs, newTab]);
    }

    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <AddTabIconButton
                        aria-label="delete"
                        size="medium"
                        {...bindTrigger(popupState)}
                    >
                        <AddIcon />
                    </AddTabIconButton>
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
                        sx={{ mt: 0.5 }}
                    >
                        <TextField
                            label="Section name..."
                            size='small'
                            variant="filled"
                            onChange={handleTabChange}
                        />
                        <AddTabButton
                            variant="contained"
                            onClick={() => addTab(tabName)}
                        >
                            Add
                        </AddTabButton>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}

export default TabAdd;