import Taro from "@tarojs/taro";
import { ADD, MINUS } from "../constants/counter";

export const add = () => {
  Taro.showLoading({
    title: "loading"
  }).then(res => console.log(res));
  Taro.request({
    url: "https://front.superbuy.com/shoppingguide/sale-daily-new?count=50",
    method: "GET",
    header: {
      "content-type": "application/json"
    }
  }).then(res => console.log(res.data));

  return {
    type: ADD
  };
};
export const minus = () => {
  Taro.showModal({
    title: "xxx",
    content: "hello world",
    cancelText: "Cancel",
    confirmText: "Ok"
  }).then(res => console.log(res.confirm, res.cancel));
  Taro.showActionSheet({
    itemList: ["a", "b", "c"]
  })
    .then((res: any) => console.log(res.errMsg, res.tapIndex))
    .catch(err => console.log(err.errMsg));

  return {
    type: MINUS
  };
};

// 异步的action
export function asyncAdd() {
  Taro.showToast({
    title: "ok",
    icon: "success",
    duration: 2000
  }).then(res => console.log(res));

  return dispatch => {
    setTimeout(() => {
      dispatch(add());
    }, 2000);
  };
}
