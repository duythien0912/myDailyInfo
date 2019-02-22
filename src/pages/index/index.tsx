import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";

import { BottomTabBar } from "../../components/BottomTabBar";
import DetailItem from "../../components/DetailItem";

import "./index.scss";

class Index extends Component {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  render() {
    return (
      <View>
        <DetailItem />
        <BottomTabBar />
      </View>
    );
  }
}

export default Index;
