import React from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';

function Loading() {
  return (
    <View style={{flex: 1}}>
      <LottieView
        style={{flex: 1}}
        source={require('../../assets/animations/loading.json')}
        autoPlay
      />
    </View>
  );
}

export default Loading;
