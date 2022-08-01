import { alpha, Button, Divider, MenuItem, styled, TextField, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import types from './data/types';


const FormTextField = styled(TextField)(({ theme }) => ({
    width: '35ch'
}));

const FormTypography = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: alpha(theme.palette.common.black, 0.5),
}))

const FormButton = styled(Button)(({ theme }) => ({
    width: '40ch'
}))

const Form = styled('form')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    float: "right",
    width: "50vh",
    height: "65vh",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    margin: "80px 20px",
}))

const CreateForm = ({ onAdd }: { onAdd: Function }) => {
    const [field, setField] = useState({ name: '', value: '', type: '' });

    const menuTypes = types.map((item, i) => {
        return <MenuItem value={item.type} key={i}>{item.type}</MenuItem>
    })

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        onAdd(field.name, field.value, field.type);
        setField({
            name: '',
            value: '',
            type: ''
        })
    }

    const setInputProp = () => {
        switch (field.type) {
            case 'string':
                return 'string'
            case 'number':
                return 'number'
            case 'Date':
                return 'Date'
            default:
        }
    }

    const inputProp = setInputProp();

    return (
        <Form onSubmit={onSubmit} sx={{ boxShadow: 2 }}>
            <FormTypography variant="h6">
                CREATE FIELD
                <Divider sx={{ width: '28ch', mt: 1.5 }} />
            </FormTypography>
            <FormTextField
                label="Field name"
                variant="outlined"
                required
                autoComplete='off'
                value={field.name}
                onChange={(e) => setField({ ...field, name: e.target.value })}
            />
            <FormTextField
                label={field.type === "Date" ? "" : "Field value"}
                variant="outlined"
                required
                autoComplete='off'
                value={field.value}
                inputProps={{ type: inputProp }}
                onChange={(e) => setField({ ...field, value: e.target.value })}
            />
            <FormControl fullWidth sx={{ width: '35ch' }}>
                <InputLabel>
                    Select field type
                </InputLabel>
                <Select
                    value={field.type}
                    label="Select field ty."
                    required
                    onChange={(e) => setField({ ...field, type: e.target.value })}
                >
                    {menuTypes}
                </Select>
            </FormControl>
            <FormButton variant='contained' type='submit' >
                Create
            </FormButton>
        </Form>
    )
}

export default CreateForm;