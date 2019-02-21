import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtTabBar } from "taro-ui";

import "./index.scss";

class BottomTabBar extends Component<any, any> {
  config: Config = {
    navigationBarTitleText: "Bottom"
  };
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }
  handleClick(value) {
    this.setState({
      current: value
    });

    switch (value) {
      case 0:
        Taro.redirectTo({
          url: `/pages/index/index`
        });
        break;
      case 1:
        Taro.redirectTo({
          url: `/pages/cart/index`
        });
        break;
      case 2:
        Taro.redirectTo({
          url: `/pages/user/index`
        });
        break;
      case 3:
        Taro.redirectTo({
          url: `/pages/tags/index`
        });
        break;
      case 4:
        Taro.redirectTo({
          url: `/pages/sb/index`
        });
        break;
      default:
        break;
    }
  }

  componentDidMount = () => {
    if (window.location.hash === "") {
      return this.setState({ current: 0 });
    } else {
      const pathname = window.location.hash.split("#")[1];
      switch (pathname) {
        case "/pages/index/index":
          return this.setState({ current: 0 });
        case "/pages/cart/index":
          return this.setState({ current: 1 });
        case "/pages/user/index":
          return this.setState({ current: 2 });
        case "/pages/tags/index":
          return this.setState({ current: 3 });
        case "/pages/sb/index":
          return this.setState({ current: 4 });
        default:
          return this.setState({ current: 0 });
      }
    }
  };

  render() {
    return (
      <View>
        <AtTabBar
          //   customStyle={{ display: "none" }}
          fixed
          tabList={[
            {
              title: "Trend",
              iconType: "home",
              text: "new"
            },
            { title: "Cart", iconType: "shopping-bag" },
            { title: "User", iconType: "user" },
            { title: "Tags", iconType: "tags" },
            { title: "SB", iconType: "list", text: "100", max: 99 }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    );
  }
}

export { BottomTabBar };
