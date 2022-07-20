import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { configsQuery } from "stores/configs";

const Configs = () => {
  const configs = useRecoilValue(configsQuery);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>Configs</h1>
      {configs.map((c) => (
        <div key={c._id}>
          <Link to={c._id}>{c.name}</Link>
        </div>
      ))}
    </Container>
  );
};

export default Configs;
