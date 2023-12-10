/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, Text, Image, View} from 'react-native';
import React from 'react';
import {styles} from '../styles/Settings';

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgView}>
        <Image
          source={{
            uri: 'https://img.icons8.com/ios/50/null/gear.png',
          }}
          style={styles.imgStyle}
        />
        <Text style={{marginTop: 5}}>Settings</Text>
      </View>
      <View style={styles.imgView}>
        <Image
          source={{
            uri: 'https://img.icons8.com/ios/50/null/admin-settings-male.png',
          }}
          style={styles.imgStyle}
        />
        <Text style={{marginTop: 5}}>Profile</Text>
      </View>
      <View style={styles.imgView}>
        <Image
          source={{
            uri: 'https://img.icons8.com/dotty/80/null/logout-rounded.png',
          }}
          style={styles.imgStyle}
        />
        <Text style={{marginTop: 5}}>Logout</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
