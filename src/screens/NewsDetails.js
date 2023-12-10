import {Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {styles} from '../styles/NewsDetails';

const NewsDetails = props => {
  const params = props?.route?.params;
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri:
            params?.urlToImage ||
            'https://as2.ftcdn.net/v2/jpg/03/85/61/45/1000_F_385614508_K1aFSB0lhI17ZaW8lsNLQeP09xNA43gF.jpg',
        }}
        style={styles.image}
      />
      <Text style={styles.textStyle}>{`Author Name: ${params?.author}`}</Text>
      <Text
        style={styles.textStyle}>{`Published At: ${params?.publishedAt}`}</Text>
      <Text style={styles.textStyle}>{`Title: ${params?.title}`}</Text>
      <Text
        style={styles.textStyle}>{`Description: ${params?.description}`}</Text>
    </SafeAreaView>
  );
};

export default NewsDetails;
