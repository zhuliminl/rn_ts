/* eslint-disable */
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  AppRegistry,
  Image,
  NativeModules,
  requireNativeComponent,
  UIManager,
  findNodeHandle,
} from 'react-native';

const VIEW_NAME = 'MyImageViewCustom';
const MyImage = requireNativeComponent(VIEW_NAME);

class NativeImage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    // this.callNativeMethod('sayHello', [1, 2, 3]);
  };

  // 使用 native 方法
  callNativeMethod = (methodName, paramArr) => {
    const handle = findNodeHandle(this);
    if (handle) {
      console.log(
        'saul UUUUUUUUUUUUUUUUUUUUUUU',
        UIManager.getViewManagerConfig(VIEW_NAME).Commands,
      );
      // const command = UIManager[VIEW_NAME].Commands[methodName];
      return;
      const command =
        UIManager.getViewManagerConfig(VIEW_NAME).Commands[methodName];
      if (typeof command == 'number') {
        UIManager.dispatchViewManagerCommand(handle, command, paramArr);
      }
    }
  };

  render() {
    return (
      <MyImage
        {...this.props}
      />
    );
  }
}

export default NativeImage