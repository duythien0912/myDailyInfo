import Taro from "@tarojs/taro";
import { AtSearchBar } from "taro-ui";

class SearchBar extends Taro.Component<any, any> {
  constructor() {
    super(...arguments);
    this.state = {
      value: ""
    };
  }
  onChange(value) {
    this.setState({
      value: value
    });
  }
  onActionClick() {
    console.log("onActionClick");
  }
  onActionConfirm() {
    console.log("onActionConfirm");
  }

  render() {
    return (
      <AtSearchBar
        fixed
        showActionButton
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        // onConfirm={this.onActionConfirm.bind(this)}
        onActionClick={this.onActionClick.bind(this)}
        actionName="Search"
        placeholder="Search"
      />
    );
  }
}

export { SearchBar };
