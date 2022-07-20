import { selector, selectorFamily } from "recoil";
import { getConfigs, getConfig } from "shared/services/configs-manager-service";

export const configsQuery = selector({
  key: "Configs",
  get: async () => {
    const response = await getConfigs();
    return response.data;
  },
});

export const configQuery = selectorFamily({
  key: "Config",
  get: (id: string) => async () => {
    const response = await getConfig(id);
    return response.data;
  },
});
