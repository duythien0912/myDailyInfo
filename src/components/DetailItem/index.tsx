import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { fetchData } from "@utils/fetchData";
import { AtGrid } from "taro-ui";

import "./index.scss";
import { SearchBar } from "../SearchBar";

class Index extends Component<any, any> {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  state: {
    listItem: [];
  };

  componentDidMount = async () => {
    const res = await fetchData({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: "{ ItemDetail{ request_id item{ images } } }"
      })
    });

    if (res.ok) {
      const resJson = await res.json();
      const arrayImg = resJson.data.ItemDetail.item.images || [];
      const arrImgFormat = arrayImg.map(url => {
        return {
          image: url,
          value: "test"
        };
      });
      this.setState({
        listItem: arrImgFormat
      });
    }
  };

  render() {
    const { listItem } = this.state;
    return (
      <View>
        <SearchBar />
        <View className="mgt1rem">
          <AtGrid data={listItem} hasBorder={false} />
        </View>
      </View>
    );
  }
}

export default Index;
