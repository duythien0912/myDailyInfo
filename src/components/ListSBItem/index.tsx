import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Loading from "@components/Loading";
import { fetchData } from "@utils/fetchData";

import "./index.scss";

class ListSBItem extends Component<any, any> {
  state = {
    SBItem: [],
    loading: false
  };
  componentDidMount = async () => {
    this.setState({
      loading: true
    });

    const res = await fetchData({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query:
          "{ superbuy{ data{ id goodsPicUrl goodsLink goodsTitle goodsPrice userLevelType } } }"
      })
    });

    if (res.ok) {
      const resJson = await res.json();
      this.setState({ SBItem: resJson.data.superbuy.data });
    } else {
      this.setState({
        SBItem: []
      });
    }

    this.setState({
      loading: false
    });
  };

  render() {
    const { loading = false, SBItem = [] } = this.state;
    if (!!loading) {
      return <Loading />;
    }

    return (
      <View>
        {/* <Item /> */}
        {SBItem.map((data: any) => (
          <View
            key={`ListSBItem-${data.id}`}
            className="at-row at-row__justify--center"
          >
            <View className="at-col at-col-6">
              <Image
                style={{ width: "auto", height: "auto" }}
                lazyLoad
                mode="scaleToFill"
                src={data.goodsPicUrl}
              />
            </View>
            <View className="at-col at-col-6 at-col--wrap pd0.5rem">
              <View className="limitText at-article__h1">
                {data.goodsTitle}
              </View>
              <View className="at-article__h2">{data.goodsPrice}¥</View>
              <View className="at-article__h3">👑{data.userLevelType}</View>
              <AtButton
                customStyle={{ backgroundColor: "#ff5000", border: 0 }}
                type="primary"
                size="small"
                circle
                full
                onClick={() => {
                  window.open(data.goodsLink, "_blank");
                }}
              >
                Open🚀
              </AtButton>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

export default ListSBItem;
