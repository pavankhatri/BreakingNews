import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewsCard from '../component/NewsCard';
import {styles} from '../styles/News';

const News = () => {
  const [news, setNews] = useState('');
  const [topNews, setTopNews] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  setTimeout(async () => {
    const res = await fetch(
      'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b4ec3cc24db34f34be910d2950ec04d2',
    );
    const TopNews = await res.json();
    setTopNews(TopNews);
  }, 10000);

  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = async () => {
    try {
      const res = await fetch(
        'https://newsapi.org/v2/everything?q=apple&from=2023-12-09&to=2022-12-09&sortBy=popularity&apiKey=b4ec3cc24db34f34be910d2950ec04d2',
      );
      const response = await res.json();
      await AsyncStorage.setItem('news', JSON.stringify(response));
      setNews(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <Text style={styles.newsHeadline}>Top 10 News 📰🚨</Text>
        {topNews.articles?.map((item, index) => {
          return <NewsCard item={item} navigation={navigation} key={index} />;
        })}
        <Text style={styles.newsHeadline}>Popular News 📰</Text>
        {news.articles?.map((item, index) => {
          return <NewsCard item={item} navigation={navigation} key={index} />;
        })}
      </View>
    </ScrollView>
  );
};

export default News;
