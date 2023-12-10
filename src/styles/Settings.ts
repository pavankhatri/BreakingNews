import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  imgStyle: {
    height: 25,
    width: 25,
    resizeMode: 'cover',
    tintColor: 'black',
    marginHorizontal: 15,
  },
  imgView: {flexDirection: 'row', marginVertical: 30},
});
