import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import {styles} from '../styles/NewsCard';

const NewsCard = ({item, navigation}: any) => {
  return (
    <View style={styles.newsCard}>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewsDetails', item)}>
          <Image
            source={{
              uri:
                item?.urlToImage ||
                'https://as2.ftcdn.net/v2/jpg/03/85/61/45/1000_F_385614508_K1aFSB0lhI17ZaW8lsNLQeP09xNA43gF.jpg',
            }}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardText}
          onPress={() => navigation.navigate('NewsDetails', item)}>
          <Text style={styles.text}>{item?.title}</Text>
          <Text style={styles.moreDetails}>{'More Details'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsCard;
