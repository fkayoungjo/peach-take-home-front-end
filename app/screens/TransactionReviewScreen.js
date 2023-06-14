import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import apiActions from '../actions/apiActions';
import { styles } from '../styles/styles';
import moment from 'moment';


export default function TransactionReviewScreen({ route }) {
  const { transactions, categoryMap, merchantMap } = route.params;
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const [transactionsState, setTransactionsState] = useState(transactions);

  const handleNext = async () => {
    if (index < transactionsState.length - 1) {
      setIndex(index + 1);
    } else {
      navigation.goBack();
    }

    const updatedTransaction = {
      ...transactionsState[index],
      reviewed: true,
    };

    await apiActions.updateTransaction(transactionsState[index].id, updatedTransaction);
  };

  const navigateToCategoryScreen = () => {
    navigation.navigate('CategoryScreen', {
      index: index,
      transactions: transactionsState,
      updateTransaction: (updatedTransaction) => {
        let updatedTransactions = [...transactionsState];
        updatedTransactions[index] = updatedTransaction;
        setTransactionsState(updatedTransactions);
      },
    });
  };
  const date = '2023-05-28';
  const formattedDate = moment(date).format('ddd D MMM YYYY');
  return (
    <View style={styles.transactionReviewContainer}>
      <Text style={styles.transactionScreenDate}>{ moment(transactionsState[index].date).format('ddd D MMM YYYY')}</Text>
      <Text style={styles.transactionScreenTitle}>{transactionsState[index].transaction_name}</Text>
      <Text style={styles.transactionScreenMerchant}>{merchantMap[transactionsState[index].merchant_id].name}</Text>
      <Text style={styles.transactionScreenAmount}>${parseFloat(transactionsState[index].amount).toFixed(2)}</Text>
      <View style={[
        styles.emojiContainer, {
          backgroundColor: categoryMap[transactionsState[index].category_id].color,
          top: '53%',
          left: '27%',
          justifyContent: 'center',
          alignItems: 'center',
        }
      ]}>
        <Text>{categoryMap[transactionsState[index].category_id].emoji}</Text>
      </View>
      <Text onPress={navigateToCategoryScreen} style={styles.transactionScreenCategory}>
        {categoryMap[transactionsState[index].category_id].name}
      </Text>
      <TouchableOpacity title="Next" onPress={handleNext} style={styles.transactionScreenButton}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
