import { useRoutes } from "react-router-dom";
import { configsRoutes } from "configs-module";

const Routes = () => {
  const element = useRoutes([...configsRoutes]);
  return element;
};

export default Routes;
