import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";

import "./index.scss";
import { SearchBar } from "../SearchBar";

class Index extends Component<any, any> {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  render() {
    return (
      <View>
        <SearchBar />
      </View>
    );
  }
}

export default Index;
