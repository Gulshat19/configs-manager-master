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

    const onTypeChange = (e: any) => {
        setType(e.target.value);
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        onAdd(name, value, type);
        setName('');
        setValue('');
    }

    return (
        <form className='create-form' onSubmit={onSubmit}>
            <FormTypography variant="h6">
                CREATE FIELD
                <Divider sx={{ width: '28ch', mt: 1.5 }} />
            </FormTypography>
            <FormTextField
                label="Field name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <FormTextField
                label="Field value"
                variant="outlined"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <TypeSelect type={type} onTypeChange={onTypeChange} />
            <FormButton
                variant='contained'
                type='submit'
            >
                Create
            </FormButton>
        </form>
    )
}

export default CreateForm;