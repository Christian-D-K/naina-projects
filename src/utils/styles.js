import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

export const CardStyles = StyleSheet.create({
  cardContainer: {
    width: 164,
    height: 144,
    marginVertical: 8,
    borderRadius: 4,
  },
  editCardContainer: {
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 0,
  },
  visualArea: {
    height: 96,
    width: 164,
    borderTopStartRadius: 4,
    borderTopEndRadius: 4,
  },
  titleArea: {
    height: 48,
    borderBottomEndRadius: 4,
    borderBottomStartRadius: 4,
  },
  visualAreaTop: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cover: {
    position: 'absolute',
    opacity: 0.4,
  },
  visualAreaBottom: {
    height: 56,
  },
  title: {
    marginHorizontal: 8,
    marginTop: 14,
    fontSize: 16,
    color: COLORS.WHITE_L001,
    fontWeight: 'bold',
  },
  check: {
    margin: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: COLORS.GRAY_D001,
  },
  unChecked: {
    backgroundColor: COLORS.WHITE_L001,
    opacity: 0.5,
  },
  checked: {
    backgroundColor: COLORS.BLUE_L001,
    opacity: 0.9,
  },
  checkArea: {
    width: 32,
    height: 32,
  },
  checkUnVisible: {
    margin: 8,
    width: 24,
    height: 24,
  },
  description: {
    width: 140,
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.WHITE_L001,
  },
  image: {
    position: 'absolute',
  },
});

export const RaddioButtonStyles = StyleSheet.create({
  container: {
    height: 40,
  },
  option: {
    textAlign: 'center',
    lineHeight: 40,
    color: COLORS.GRAY_D001,
  },
  choicedOptions: {
    color: COLORS.BLACK_D001,
    fontWeight: 'bold',
  },
  optionsContainer: {
    borderRadius: 6,
    backgroundColor: COLORS.GRAY_M001,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cursor: {
    position: 'absolute',
    left: 0,
    height: 32,
    marginLeft: 4,
    backgroundColor: '#ffffff',
    borderRadius: 6,
  },
});
