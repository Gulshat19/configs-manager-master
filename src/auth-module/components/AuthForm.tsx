import { Stack, Button } from "@mui/material";
import UsernameField from "./UsernameField";
import PasswordInput from "./PasswordField";
import { useEffect } from "react";
import { useState } from "react";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('')
  return (
    <Stack spacing={2}>
      <UsernameField name="login" />
      <PasswordInput name="password" />
      <Button variant="contained">Log In</Button>
    </Stack>
  );
};

export default AuthForm;
