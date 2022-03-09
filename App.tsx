import React, {useEffect} from 'react';
import Orientation from 'react-native-orientation';
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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ImagePicker from 'react-native-image-crop-picker';
import BizApp from './BizApp';

const App = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    // Orientation.lockToLandscape();
    return () => {
      console.log('saul LEAVE_APP');
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={async () => {
          try {
            const data = await ImagePicker.openPicker({
              mediaType: 'video',
              // mediaType: 'image'
            });
            console.log('saul lllllllllllllllllll', data)
          } catch (error) {
            console.log('saul EEEEEEEEEE', error);
          }
        }}
        style={{
          height: 300,
          width: 200,
          backgroundColor: 'red',
        }}>
        <Text>点击获取视频</Text>
      </TouchableOpacity>

      {/* <BizApp /> */}
    </View>
  );
};

export default App;
