import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import apiActions from '../actions/apiActions';
import apiStore from '../stores/apiStore';
import { styles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Piechart from './PieChart'; 
import moment from 'moment';

export default function HomeScreen() {
  const [transactions, setTransactions] = useState([]);
  const [merchants, setMerchants] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categorySpending, setCategorySpending] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = apiStore.listen(onStateChange);

    apiActions.getCategories();
    apiActions.getMerchants();
    apiActions.getTransactions();

    return () => unsubscribe();
  }, [onStateChange]);

  const onStateChange = (data) => {
    switch (data.target) {
      case 'UPDATE_CATEGORIES':
        updateCategories();
        break;
      case 'UPDATE_MERCHANTS':
        updateMerchants();
        break;
      case 'UPDATE_TRANSACTIONS':
        updateTransactions();
        break;
      default:
        return;
    }
  };

  const updateCategories = () => {
    const currentState = apiStore.getCurrentState();
    console.log('Received Categories: ' + JSON.stringify(currentState.categories));
    setCategories(currentState.categories);
  };

  const updateMerchants = () => {
    const currentState = apiStore.getCurrentState();
    console.log('Received Merchants: ' + JSON.stringify(currentState.merchants));
    setMerchants(currentState.merchants);
  };

  const updateTransactions = () => {
    const currentState = apiStore.getCurrentState();
    console.log('Received Transactions: ' + JSON.stringify(currentState.transactions));
    setTransactions(currentState.transactions);
    calculateCategorySpending(currentState.transactions);
  };

  const merchantMap = {};
  merchants.forEach((merchant) => {
    merchantMap[merchant.id] = merchant;
  });

  const categoryMap = {
    Other: {
      name: 'Other',
      color: '#808080',
      emoji: '👀',
    },
    ...categories.reduce((map, category) => ({ ...map, [category.id]: category }), {}),
  };

  const renderTransactions = ({ item }) => (
    <View style={!item.reviewed ? styles.unreviewedItem : null}>
      <View style={[styles.transactionCard, { marginBottom: 10 }]}>
        <Text style={styles.transactionAmount}>${item.amount}</Text>
        <Text style={styles.transactionDate}>{ moment(item.date).format('D MMM YYYY')}</Text>
        <Text style={styles.transactionMerchant}>{merchantMap[item.merchant_id].name}</Text>
        <Text style={styles.transactionCategory}>{categoryMap[item.category_id].name}</Text>
        <Text style={[styles.emojiContainer, { backgroundColor: categoryMap[item.category_id].color }]}>
          <Text style={styles.emoji}>{categoryMap[item.category_id].emoji}</Text>
        </Text>
      </View>
    </View>
  );

  const calculateCategorySpending = (transactions) => {
    let categorySpending = {};
    transactions.forEach((transaction) => {
      if (transaction.amount > 0) {
        if (categorySpending[transaction.category_id]) {
          categorySpending[transaction.category_id] += parseFloat(transaction.amount);
        } else {
          categorySpending[transaction.category_id] = parseFloat(transaction.amount);
        }
      }
    });

    const totalSpent = Object.values(categorySpending).reduce((a, b) => a + b, 0);
    setTotalSpent(totalSpent.toFixed(2));

    const sortedCategorySpending = Object.entries(categorySpending).sort((a, b) => b[1] - a[1]);

    let topCategories = sortedCategorySpending.slice(0, 3);
    let otherCategories = sortedCategorySpending.slice(3);

    if (otherCategories.length > 0) {
      const otherTotal = otherCategories.reduce((total, [categoryId, amount]) => total + parseFloat(amount), 0);
      topCategories.push(['Other', otherTotal]);
    }

    const categorySpendingPercentage = topCategories.map(([categoryId, amount]) => {
      return {
        categoryId: categoryId,
        amount: parseFloat(amount).toFixed(2),
        percentage: ((parseFloat(amount) / totalSpent) * 100).toFixed(2),
      };
    });

    setCategorySpending(categorySpendingPercentage);
  };

  const unreviewedTransactionsButton = () => {
    let unreviewedTransactions = transactions.filter((transaction) => !transaction.reviewed);

    if (unreviewedTransactions.length > 0) {
      return (
        <TouchableOpacity
          style={styles.unreviewedTransactions}
          onPress={() =>
            navigation.navigate('TransactionReview', {
              transactions: unreviewedTransactions,
              categoryMap: categoryMap,
              merchantMap: merchantMap,
            })
          }
        >
          <LinearGradient
            colors={['#FF0000', '#00FF00']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientBackground}
          >
            <Text style={{ color: '#fff', textAlign: 'center' }}>
              {`${unreviewedTransactions.length} New Transactions to Review`}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Piechart
        categorySpending={categorySpending}
        totalSpent={totalSpent}
        categoryMap={categoryMap}
      />
      {unreviewedTransactionsButton()}
      <FlatList
        style={styles.transactionContainer}
        data={transactions}
        renderItem={renderTransactions}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
