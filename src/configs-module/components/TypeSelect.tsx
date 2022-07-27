import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import types from './data/types';

export default function TypeSelect(props: any) {
    const { type, onTypeChange } = props;

    const menuTypes = types.map((item, i) => {
        return <MenuItem value={item.type} key={i}>{item.type}</MenuItem>
    })

    return (
        <Box sx={{ width: '35ch' }}>
            <FormControl fullWidth>
                <InputLabel>
                    Select field type
                </InputLabel>
                <Select
                    value={type}
                    label="Select field ty."
                    required
                    onChange={onTypeChange}
                >
                    {menuTypes}
                </Select>
            </FormControl>
        </Box>
    );
}