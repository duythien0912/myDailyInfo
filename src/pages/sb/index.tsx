import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import ListSBItem from "@components/ListSBItem";

import { BottomTabBar } from "../../components/BottomTabBar";

import "./index.scss";

class Index extends Component {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  render() {
    return (
      <View className="pd0.5rem pdb3rem">
        <ListSBItem />
        <BottomTabBar />
      </View>
    );
  }
}

export default Index;
