import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import ShopeeButton from "@components/ShopeeButton";

import { BottomTabBar } from "../../components/BottomTabBar";

import "./index.scss";

class Index extends Component {
  config: Config = {
    navigationBarTitleText: "DashBoard"
  };

  render() {
    return (
      <View>
        <Text>DashBoard</Text>
        <ShopeeButton />
        <BottomTabBar />
      </View>
    );
  }
}

export default Index;
