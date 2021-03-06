import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
  },
  summaryText: {
    fontFamily: 'Fonts_700',
    fontSize: 18,
    color: Colors.primaryText,
  },
  amount: {
    color: Colors.defaultPrimary,
  },
});

export default styles;
