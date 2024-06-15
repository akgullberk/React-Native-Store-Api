import {Dimensions, StyleSheet} from 'react-native';

const windowWitdh = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body_container: {
    padding: windowHeight * 0.01,
  },
  image: {
    width: windowWitdh,
    height: windowHeight * 0.5,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontSize: windowHeight * 0.03,
    fontWeight: 'bold',
  },
  description: {
    fontStyle: 'italic',
    marginVertical: windowHeight * 0.01,
  },
  price: {
    fontSize: windowHeight * 0.02,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});
