import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { fetchDataShopee } from "@utils/fetchData";

import "./index.scss";

export default class ShopeeButton extends Component {
  onClickAuthShopee = async () => {
    // Taro.fetch
    // https://partner.shopeemobile.com/api/v1/shop/auth_partner?id=841623&redirect=https://key46.com&token=fb1a3cc4361956144964b682b3aaa84d962ad8dc51993d71334dd90bae2f6cdb
    // https://partner.shopeemobile.com/api/v1/shop/auth_partner?id=841623&redirect=http://127.0.0.1:10086/pages/dashboard/index&token=185712121ce10abd751891b0093f8f5ca771f40a3a75180fe1336142a44acbaa
    // window.open(
    //   "https://partner.shopeemobile.com/api/v1/shop/auth_partner?id=841623&redirect=http://127.0.0.1:10086/pages/dashboard/index&token=185712121ce10abd751891b0093f8f5ca771f40a3a75180fe1336142a44acbaa"
    // );

    const res = await fetchDataShopee(
      "https://partner.shopeemobile.com/api/v1/items/get",
      {
        method: "POST",
        headers: {
          Authorization:
            "c77c3a37a976bc85e754591c1bd2fef88ddccb686edf629ecd8773f9367b52a0"
        },
        body: JSON.stringify({
          pagination_offset: 0,
          pagination_entries_per_page: 100,
          partner_id: 841623,
          shopid: 127678456,
          timestamp: 1551101754
        })
      }
    );
    console.log(res);
  };

  render() {
    return (
      <View className="shopee-button-auth">
        <AtButton
          //   circle
          type="primary"
          onClick={this.onClickAuthShopee}
          customStyle={{ backgroundColor: "#fa5837" }}
        >
          Shopee Auth Shop
        </AtButton>
      </View>
    );
  }
}
