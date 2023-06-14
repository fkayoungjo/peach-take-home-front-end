import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: 375,
    height: 1308,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
      alignItems: 'center',
      justifyContent: 'center',
  },
  transactionCard: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '328px',
    height: '67px',
    background: '#FFFFFF',
    border: '1px solid #E6EBF0',
    borderRadius: '6px',
  },
  unreviewedItem: {
    height: '65px',
    borderRadius: '6px',
   width: '4px',
    backgroundColor: '#7981FF',
   
  },
  transactionMerchant: {
    position: 'absolute',
    left: 'calc(50% - 32px/2 - 91.5px)',
    bottom: '59.4%',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    color: '#323A47',
  },
  transactionCategory: {
    position: 'absolute',
    left: 'calc(50% - 35px/2 - 90px)',
    top: '40.67%',
    bottom: '58.1%',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#6C727C',
  },
  transactionDate: {
    position: 'absolute',
    width: 'fit',
    left: 'calc(50% - 70px/2 + 113.5px)',
    top: '40.67%',
    bottom: '58.1%',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: '#6C727C',
    textAlign: 'right',
  },
  transactionAmount: {
    position: 'absolute',
    width: 'fit',
    left: 'calc(50% - 42px/2 + 127.5px)',
    bottom: '59.4%',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'right',
    color: '#323A47',
  },
  emojiContainer: {
    position: 'absolute',
    width: 31,
    height: 31,
    left: 16,
    backgroundColor: '#B6E4FB',
    borderRadius: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieContainer: {
    position: 'absolute',
    width: 324,
    height: 236,
    left: 26,
    top: 134,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E6EBF0',
    borderRadius: 6,
  },
  pie: {
    position: 'absolute',
    width: 200,
    height: 225,
    left: 125,
  },
  pieText: {
    position: 'absolute',
    width: 141,
    left: 21,
    top: '11.31%',
    bottom: '87.46%',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    color: '#949CA8',
  },
  pieCategoryText: {
    left: 57,
    top: 179,
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 14,
    color: '#6C727C',
  },
  pieCategoryAmount: {
    left: 57,
    top: 179,
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.03,
    color: '#323A47',
  },
  totalText: {  
    position: 'absolute',
    width: 35,
    left: '60%',
    marginLeft: -18,
    top: '80%',
    bottom: '73.62%',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'right',
    color: '#6C727C',
},
  transactionContainer: {
    position: 'absolute',
    width: 328,
    top: 600,
    backgroundColor: '#FFFFFF',
  },
  totalAmount: {
    position: 'absolute',
    width: 69,
    left: '80%',
    marginLeft: -37.5,
    top: '79%',
    bottom: '73.55%',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 19,
    color: '#323A47',},
  transactionNameContainer: {
    left: '50%',
    marginLeft: -17.5,
    top: 151,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionText: {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: '#323A47',
  },
  merchantNamecontainer: {
    position: 'absolute',
    width: 27,
    left: '50%',
    marginLeft: -13.5,
    top: '25.29%',
    bottom: '72.4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  merchantText: {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    color: '#949CA8',
  },
  amountContainer: {
    position: 'absolute',
    width: 102,
    height: 44,
    left: '50%',
    marginLeft: -50.75,
    top: 194,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountText: {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 44,
    textAlign: 'center',
    color: '#323A47',
  },
  merchantName: {
    position: 'absolute',
    width: width * 0.0925,
    height: height * 0.031,
    top: height * 0.216,
    fontFamily: 'Manrope',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: '#323A47',
  },
  categoryContainer: {
    position: 'relative',
    width: 375,
    height: 812,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
  },
  categoryName: {
    position: 'absolute',
    width: width * 0.1075,
    height: height * 0.027,
    left: width * 0.44,
    fontFamily: 'Manrope',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 19,
    color: '#323A47',
  },
  nextButtonContainer: {
    position: 'absolute',
    width: 287,
    height: 39,
    left: 46,
    top: 329,
    backgroundColor: '#323A47',
    shadowColor: '#323A47',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderRadius: 6,
    elevation: 5,
  },
  unreviewedTransactions: {
    position: 'absolute',
    width: 324,
    height: 39,
    left: 26,
    top: 398,
    borderRadius: 6,
    overflow: 'hidden',
  },
  gradientBackground: {
    flex: 1,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categorySelection: {
    position: 'absolute',
    width: 323,
    height: 237,
    left: 23,
    top: 137,
  },
  emojicontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 100,
    borderRadius: 50, // Half of the container width/height
    backgroundColor: 'lightblue',
  },
  emoji: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  categoryScreenName: {
    position: 'absolute',
    width: 97,
    height: 18,
    left: 0,
    top: 100,
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    color: '#323A47',
  },
  transactionReviewContainer: {
    position: 'absolute',
    width: 328,
    height: 348,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E6EBF0',
    borderRadius: 12,
  },
  transactionScreenDate: {
    position: 'absolute',
    width: 100,
    left: '50%',
    marginLeft: -47.5,
    top: '16%',
    bottom: '79.19%',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    color: '#949CA8',
  },
  transactionScreenTitle: {
    position: 'absolute',
    left: '40%',
    top: '23%',
    width: 'fit',
    height: 19,
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
    color: '#323A47',

  },
  transactionScreenAmount: {
    position: 'absolute',
    width: 'fit',
    height: 44,
    top: '35%',
    left: '30%',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 44,
    textAlign: 'center',
    color: '#323A47',
  },
  transactionScreenMerchant: {
    position: 'absolute',
    width: 'fit',
    height: 16,
    top: '29%',
    left: '43%',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
    color: '#949CA8',
  },
  transactionScreenButton: {
    position: 'absolute',
    width: 287,
    height: 39,
    left: '5%',
    top: '72%',
    backgroundColor: '#323A47',
    shadowColor: '#323A47',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    position: 'absolute',
    width: 69.05,
    height: 19,
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  transactionScreenCategory: {
    position: 'absolute',
  
    height: 19,
    left: '38%',
    top: '55%',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 19,
    color: '#323A47',
  },
  pieAmountContainer: {
    container: {
    position: 'absolute',
    width: 3,
    height: 32,
    left: 47,
    top: 250,
    backgroundColor: '#B6E4FB',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 0,
  }
  }
});