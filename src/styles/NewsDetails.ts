import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 25,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: '600',
    width: '90%',
    marginVertical: 15,
  },
  image: {height: 150, width: 150, resizeMode: 'cover'},
});
