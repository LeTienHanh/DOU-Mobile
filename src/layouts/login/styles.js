import colors from '@themes/colors';

export default {
  footer: {
    backgroundColor: colors.background, height: 90
  },
  footerContainer: {
    paddingLeft: 10, paddingRight: 10, paddingBottom: 10, height: 90,
    flex: 1, flexDirection: 'column'
  },
  logInBtn: {
    backgroundColor: '#3F51B5',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
  },
  registerText: {
    fontWeight: '700', fontSize: 18, color: '#3F51B5',
    textDecorationLine: 'underline'
  }
};
