// import { ComponentClass } from 'react'
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Progress } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import * as fetchImport from "isomorphic-unfetch";

import { add, minus, asyncAdd } from "../../actions/counter";

import "./index.scss";

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

const fetch = fetchImport.default || fetchImport;

type PageStateProps = {
  counter: {
    num: number;
  };
};

type PageDispatchProps = {
  add: () => void;
  dec: () => void;
  asyncAdd: () => any;
};

type PageOwnProps = {};

type PageState = {
  trend: string;
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Index {
  state: PageState;
  props: IProps;
}

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    }
  })
)
class Index extends Component<PageOwnProps, PageState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "首页"
  };

  state = {
    trend: "loading"
  };

  componentDidMount() {
    Taro.getSystemInfo({
      success: res => console.log(res)
    }).then(res => console.log(res));

    fetch("http://localhost:4000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "{ trend }" })
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ trend: res.data.trend });
      });
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { trend = "" } = this.state;
    return (
      <View className="pd5rem">
        <Text className="h3">Từ khóa Top Trend</Text>

        <div dangerouslySetInnerHTML={{ __html: trend }} />

        {/* <Button className="add_btn" onClick={this.props.add}>
          +
        </Button>
        <Button className="dec_btn" onClick={this.props.dec}>
          -
        </Button>
        <Button className="dec_btn" onClick={this.props.asyncAdd}>
          async
        </Button>
        <View className="tAC">
          <Text>{this.props.counter.num}</Text>
        </View>
        <View className="tAC">
          <Text>Hello, World</Text>
        </View>
        <Progress percent={80} strokeWidth={2} active activeColor="blue" /> */}
      </View>
    );
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index;
