import TypeSelect from './TypeSelect';
import { alpha, Button, Divider, styled, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import './style/CreateForm.css';

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

const CreateForm = ({ onAdd }: { onAdd: Function }) => {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [type, setType] = useState('');

    const onTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value);
    };

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        onAdd(name, value, type);
        setName('');
        setValue('');
    }

    const setInputProp = () => {
        switch (type) {
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
        <form className='create-form' onSubmit={onSubmit}>
            <FormTypography variant="h6">
                CREATE FIELD
                <Divider sx={{ width: '28ch', mt: 1.5 }} />
            </FormTypography>
            <FormTextField
                label="Field name"
                variant="outlined"
                required
                autoComplete='off'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <FormTextField
                label={type === "Date" ? "" : "Field value"}
                variant="outlined"
                required
                autoComplete='off'
                value={value}
                inputProps={{ type: inputProp }}
                onChange={(e) => setValue(e.target.value)}
            />
            <TypeSelect type={type} onTypeChange={onTypeChange} />
            <FormButton variant='contained' type='submit' >
                Create
            </FormButton>
        </form>
    )
}

export default CreateForm;