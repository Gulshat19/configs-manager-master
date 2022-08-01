import TypeSelect from './TypeSelect';
import { alpha, Button, Divider, styled, TextField, Typography } from '@mui/material';
import { useState } from 'react';

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
        </Form>
    )
}

export default CreateForm;