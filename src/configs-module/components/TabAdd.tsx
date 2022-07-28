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
    color: theme.palette.common.white,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 10px;'
    }
}));


const TabAdd = ({ setConfigure, configure }: { setConfigure: Function, configure: Config }) => {
    const [sectionName, setSectionName] = useState('');

    const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSectionName(e.target.value);
    }

    const addSection = (name: string) => {
        const newSection = {
            _id: uuidv4(),
            name,
            fields: []
        }
        setConfigure({
            sections: [...configure.sections, newSection]
        });
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
                            onClick={() => addSection(sectionName)}
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