import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  whiteLinearGriendBoard: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.20,
    display: 'flex',
    alignItems: 'center',
  },
  inputFieldContainer: {
    height: 52,
    maxHeight: 52,
    backgroundColor: 'white',
    borderRadius: 12,
    width: '90%',
    marginTop: '10%',
    shadowColor: colors.sanJuan,
    shadowOffset: { height: 12, width: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputFieldIconContainer: {
    width: '19%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 2,
    borderRightColor: colors.ghostWhite,
  },
  inputFieldTextField: {
    color: colors.shipCove,
    fontSize: 16,
    marginLeft: 10,
    height: '100%',
    flex: 1,
    marginRight: 10,
  },
});

export default styles;
