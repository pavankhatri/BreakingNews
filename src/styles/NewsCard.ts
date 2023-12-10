import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  newsCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    flexWrap: 'wrap',
  },
  cardContainer: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#182dc9',
    borderRadius: 20,
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 20,
    borderColor: 'blue',
    borderWidth: 2,
    resizeMode: 'cover',
  },
  cardText: {padding: 15, width: '80%'},
  text: {color: 'white'},
  moreDetails: {color: 'gray', textDecorationLine: 'underline'},
});
