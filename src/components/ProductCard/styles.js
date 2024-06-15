import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    borderColor: '#bdbdbd',
    borderWidth: 1,
    margin: windowWidth * 0.03,
    flexDirection: 'row',
  },
  image: {
    width: windowWidth * 0.3,
    minHeight: windowHeight * 0.15,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    flex: 1,
    padding: windowHeight * 0.01,
    justifyContent: 'space-between',
  },
  title: {fontWeight: 'bold', fontSize: windowHeight * 0.02},
  price: {
    textAlign: 'right',
    fontSize: windowHeight * 0.02,
    fontStyle: 'italic',
  },
});
