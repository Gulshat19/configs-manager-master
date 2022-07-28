import { Button, MenuItem, Select, TableCell, TableRow, TextField } from '@mui/material';
import { useState } from 'react';
import types from './data/types';
import ChangeAlert from './ChangeAlert';

const Field = ({ name, value, type, onDelete, onChangeProp }: { name: string, value: any, type: string, onDelete: React.ReactEventHandler, onChangeProp: Function }) => {
    const [open, setOpen] = useState(false);

    const setInputType = () => {
        switch (type) {
            case 'boolean':
                return (
                    <Select size='small' defaultValue='True' onChange={(e) => onChangeProp('value', e.target.value)}>
                        <MenuItem value='True'>True</MenuItem>
                        <MenuItem value='False'>False</MenuItem>
                    </Select>
                );
            case 'array':
            case 'Date':
            case 'number':
            default:
                return (
                    <TextField
                        size='small'
                        variant="outlined"
                        defaultValue={value}
                        onChange={(e) => onChangeProp('value', e.target.value)}
                        {...['Date', 'number'].includes(type) && { inputProps: { type } }}
                    />
                );
        }
    }

    const inputType = setInputType();

    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    <TextField
                        variant="outlined"
                        defaultValue={name}
                        size='small'
                        onChange={(e) => onChangeProp('name', e.target.value)}
                    />
                </TableCell>
                <TableCell align="right">
                    {inputType}
                </TableCell>
                <TableCell align="right">
                    <TextField
                        variant="standard"
                        value={type}
                        select
                        sx={{ width: 100 }}
                        onChange={(e) => onChangeProp('type', e.target.value)}
                        onFocus={() => setOpen(true)}
                    >
                        {types.map((t, i) => {
                            return <MenuItem value={t.type} key={i}>{t.type}</MenuItem>
                        })}
                    </TextField>
                </TableCell>
                <TableCell align="right">
                    <Button color='primary' variant='contained' onClick={onDelete}>
                        Delete
                    </Button>
                </TableCell>
            </TableRow>
            <ChangeAlert open={open} setOpen={setOpen} />
        </>
    )
}

export default Field;