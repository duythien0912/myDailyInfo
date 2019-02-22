import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { fetchData } from "@utils/fetchData";

import { BottomTabBar } from "../../components/BottomTabBar";

import "./index.scss";

type PageOwnProps = {};

type PageState = {
  trend: string;
  isLoading: boolean;
};

type IProps = PageOwnProps;

interface Index {
  state: PageState;
  props: IProps;
}

class Index extends Component<PageOwnProps, PageState> {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  state = {
    trend: "loading",
    isLoading: false
  };

  componentDidMount() {
    this.GetTrend();
  }

  GetTrend = () => {
    this.setState({ trend: "loading", isLoading: true });

    fetchData({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "{ trend }" })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ trend: res.data.trend, isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          trend: "SomeThing Error Please Try Again Later !",
          isLoading: false
        });
      });
  };

  render() {
    const { trend = "", isLoading = false } = this.state;
    return (
      <View>
        <View className="pd0.5rem pdb3rem">
          <Text className="h3">Từ khóa Top Trend Google</Text>
          {/* eslint-disable-next-line */}
          <div dangerouslySetInnerHTML={{ __html: trend }} />

          <AtButton
            className="mgt1rem"
            type="primary"
            onClick={() => this.GetTrend()}
            loading={isLoading}
          >
            {isLoading ? "" : "Get New"}
          </AtButton>
        </View>
        <BottomTabBar />
      </View>
    );
  }
}

export default Index;
