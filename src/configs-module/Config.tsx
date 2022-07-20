import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Manager from './components/Manager';
import { configQuery } from "stores/configs";

const Config = () => {
  const { id } = useParams();
  const config = useRecoilValue(configQuery(id!));

  return (
    <Manager config={config} />
  );
};

export default Config;
