/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  AppRegistry,
} from 'react-native';

const App = (props) => {
  useEffect(() => {
    // console.log('saul global', global.ezData);
  }, []);

  return (
    <SafeAreaView style={{}}>
      <View>
        <Text>子RN</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
        }}
        style={{
          height: 50,
          width: 100,
          backgroundColor: '#999',
        }}>
        <Text>跳转到主 RN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
