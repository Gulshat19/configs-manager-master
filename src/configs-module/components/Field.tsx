import { Button, MenuItem, Select, TableCell, TableRow, TextField } from '@mui/material';
import types from './data/types';

const Field = (props: any) => {
    const { _id, name, value, type, onDelete, onChangeProp } = props;

    const setInputType = () => {
        switch (type) {
            case 'boolean':
                return <Select size='small' defaultValue='True' onChange={(e) => onChangeProp('value', e.target.value)}>
                    <MenuItem value='True'>True</MenuItem>
                    <MenuItem value='False'>False</MenuItem>
                </Select>;
            default:
                return <TextField size='small' variant="outlined" defaultValue={value} onChange={(e) => onChangeProp('value', e.target.value)} />;
        }
    }

    const inputType = setInputType();

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
                <TextField
                    variant="outlined"
                    defaultValue={name}
                    size='small'
                    sx={{ width: 150 }}
                    onChange={(e) => onChangeProp('name', e.target.value)}
                />
            </TableCell>
            <TableCell align="right">
                {inputType}
            </TableCell>
            <TableCell align="right">
                <TextField
                    sx={{ width: 100 }}
                    select
                    label="Type"
                    value={type}
                    onChange={(e) => onChangeProp('type', e.target.value)}
                    variant="standard"
                >
                    {types.map((t, i) => {
                        return <MenuItem value={t.type} key={i}>{t.type}</MenuItem>
                    })}
                </TextField>
            </TableCell>
            <TableCell align="right">
                <Button
                    color='primary'
                    variant='contained'
                    sx={{ ml: 2 }}
                    onClick={() => onDelete(_id)}
                >
                    Delete
                </Button>
            </TableCell>
        </TableRow>
    )
}

export default Field;