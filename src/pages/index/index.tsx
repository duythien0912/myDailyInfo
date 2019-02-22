import Taro, { Component, Config } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Loading from "@components/Loading";
// import { connect } from "@tarojs/redux";
// import * as actions from "@actions/home";

import { BottomTabBar } from "../../components/BottomTabBar";
import DetailItem from "../../components/DetailItem";

import "./index.scss";

// @connect(
//   state => state.home,
//   { ...actions }
// )
class Index extends Component<any, any> {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  state = {
    loaded: false
  };
  componentDidMount = async () => {
    // console.log(this.props);
    // await this.props.dispatchHome();
    // console.log("oke load finish");
    this.setState({ loaded: true });
  };

  render() {
    const { loaded = false } = this.state;
    if (!loaded) {
      return <Loading />;
    }
    return (
      <View>
        <DetailItem />
        <BottomTabBar />
      </View>
    );
  }
}

export default Index;
