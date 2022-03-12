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
import NativeImage from './NativeComponent/MyImage';

const App = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <Text>oo</Text>
      <NativeImage 
        _onImagePress={e => {
          console.log('saul >>>>>>>>>>>>',e.nativeEvent)
        }}
        title="xxxj"
        backgroundC={"#EEEEEE"}
        borderRadius={100}
        // titleName="saulName"
        // titleDesc="saulDesc"
        // source={{uri: 'https://c-ssl.duitang.com/uploads/item/202004/17/20200417121646_crtyi.jpg'}}
        imageUrl={"https://c-ssl.duitang.com/uploads/item/202004/17/20200417121646_crtyi.jpg"}
        style={{
          height: 200,
          width: 200,
          backgroundColor: '#000',
        }}
      />
      <Image
        style={{
          height: 200,
          width: 200,
          backgroundColor: '#999',
        }}
        source={{
          uri: 'https://c-ssl.duitang.com/uploads/item/202004/17/20200417121646_crtyi.jpg',
        }}
      />
    </View>
  );
};

export default App;
