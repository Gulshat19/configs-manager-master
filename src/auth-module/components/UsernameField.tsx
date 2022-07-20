import { TextField, TextFieldProps } from "@mui/material";

const UsernameField = (props: TextFieldProps) => {
  return <TextField label="Username" {...props} />;
};

export default UsernameField;
