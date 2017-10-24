import Colors from './colors';
import Fonts from './fonts';
import Sizes from './sizes';

export default {
  // Text Styles
  baseText: {
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size,
    lineHeight: Fonts.base.lineHeight,
    color: Colors.textPrimary,
    fontWeight: '300',
  },
  p: {
    fontFamily: Fonts.base.family,
    fontSize: Fonts.base.size,
    lineHeight: Fonts.base.lineHeight,
    color: Colors.textPrimary,
    fontWeight: '300',
    marginBottom: 8,
  },
  h1: {
    fontFamily: Fonts.h1.family,
    fontSize: Fonts.h1.size,
    lineHeight: Fonts.h1.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: '800',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h2: {
    fontFamily: Fonts.h2.family,
    fontSize: Fonts.h2.size,
    lineHeight: Fonts.h2.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: '800',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h3: {
    fontFamily: Fonts.h3.family,
    fontSize: Fonts.h3.size,
    lineHeight: Fonts.h3.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: '500',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h4: {
    fontFamily: Fonts.h4.family,
    fontSize: Fonts.h4.size,
    lineHeight: Fonts.h4.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: '800',
    margin: 0,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  h5: {
    fontFamily: Fonts.h5.family,
    fontSize: Fonts.h5.size,
    lineHeight: Fonts.h5.lineHeight,
    color: Colors.headingPrimary,
    fontWeight: '800',
    margin: 0,
    marginTop: 4,
    marginBottom: 4,
    left: 0,
    right: 0,
  },
  textCenter: {
    textAlign: 'center',
  },
  marginTop30: {
    marginTop: 30,
  },
  marginTop15: {
    marginTop: 15,
  },
  iconInput: {
    marginRight: 5,
    fontSize: 20,
  },
  shadowSubHeader: {
    width: Sizes.screen.width,
    height: 40,
    radius: 3,
    opacity: 0.1,
    x: 0,
    y: 3,
  },
  subHeader: {
    width: Sizes.screen.width,
    height: 40,
    backgroundColor: Colors.background,
  },
  header: {
    height: 45
  }
};
