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
      <BizApp />
    </View>
  );
};

export default App;
