import { Button, Container } from "@mui/material";
import { AWS_HOSTED_UI_URI } from "shared/configs/aws-cognito";
import { useSearchParams } from "react-router-dom";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const awsIdToken = searchParams.get("id_token");

  if (awsIdToken) {
    console.log("awsIdToken", awsIdToken);
  }

  const openHostedUI = () => window.open(AWS_HOSTED_UI_URI);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button
        size="large"
        variant="contained"
        sx={{
          py: 2,
          px: 8,
        }}
        onClick={openHostedUI}
      >
        Sign in
      </Button>
    </Container>
  );
};

export default Auth;
