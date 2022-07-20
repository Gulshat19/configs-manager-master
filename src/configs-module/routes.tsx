import Configs from "./Configs";
import Config from "./Config";
import Manager from './components/Manager';

const routes = [
  {
    path: "configs",
    element: <Configs />,
  },
  {
    path: "configs/:id",
    element: <Config />,
  },
  {
    path: "manager",
    element: <Manager />,
  },
];
export default routes;
