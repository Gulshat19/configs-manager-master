import { TextField, TextFieldProps } from "@mui/material";

const PasswordInput = (props: TextFieldProps) => {
  return <TextField label="Password" {...props} />;
};

export default PasswordInput;
