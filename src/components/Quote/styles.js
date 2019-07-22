import { StyleSheet } from 'react-native';

import Colors from '@lusiaves/constants/colors';

export default StyleSheet.create({
  quote: {
    width: '80%',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.GREY,
  },
  closeQuote: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
