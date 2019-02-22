import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

import "./index.scss";

class Item extends Component {
  render() {
    return (
      <View className="box">
        <View className="primary">
          <Image
            style={{ width: "auto", height: "auto" }}
            lazyLoad
            mode="scaleToFill"
            className="item"
            src="https://img.alicdn.com/tfs/TB1UiIaCgHqK1RjSZFgXXa7JXXa-640-640.png"
          />
          <View className="outer">
            <View className="color" />
            <Text className="live">直播中</Text>
          </View>
        </View>
        <View className="side">
          <Text className="title">春季亚麻条纹时尚性感上衣</Text>
          <View className="originPriceWrap">
            <Text className="price">价格：</Text>
            <Text className="originPrice">￥666.00</Text>
          </View>
          <View className="moneyWrap">
            <Image
              style={{ width: "auto", height: "auto" }}
              lazyLoad
              mode="scaleToFill"
              className="priceIcon"
              src="https://img.alicdn.com/tfs/TB1L0.kChYaK1RjSZFnXXa80pXa-144-48.png"
            />
            <Text className="yuan">￥</Text>
            <Text className="money">6?6.00</Text>
          </View>
          <Image
            style={{ width: "auto", height: "auto" }}
            lazyLoad
            mode="scaleToFill"
            className="txtBg"
            src="https://img.alicdn.com/tfs/TB17yT7ClLoK1RjSZFuXXXn0XXa-692-8.png"
          />
          <Text className="summary">
            布料质感很柔软,上身很舒服,极 简主义,打造出青春气息
          </Text>
          <View className="grid">
            <View className="col1">
              <Text className="tag">进店抢红包</Text>
            </View>
            <View className="col2">
              <Text className="tag2">加购物车</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export { Item };
