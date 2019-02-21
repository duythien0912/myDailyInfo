import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { BottomTabBar } from "../../components/BottomTabBar";

import "./index.scss";

class Index extends Component {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  render() {
    return (
      <View>
        <View className="pd0.5rem pdb3rem">
          <Text className="h3">Cart Page</Text>
        </View>
        <BottomTabBar />
      </View>
    );
  }
}

export default Index;
