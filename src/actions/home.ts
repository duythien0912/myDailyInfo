import { createAction } from "@utils/redux";
import { HOME_INFO } from "@constants/home";

export const dispatchHome = payload =>
  createAction({
    type: HOME_INFO,
    payload
  });
