import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import apiActions from '../actions/apiActions';
import apiStore from '../stores/apiStore';
import { styles } from '../styles/styles';

const numColumns = 3;
const size = Dimensions.get('window').width/numColumns;

export default function CategoryScreen({ route }) {
  const { index, transactions, updateTransaction } = route.params;
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();


  useEffect(() => {
    const unsubscribe = apiStore.listen(onStateChange);

    apiActions.getCategories();

    return () => unsubscribe;
  }, []);

  const onStateChange = (data) => {
    switch (data.target) {
      case 'UPDATE_CATEGORIES':
        updateCategories();
      default:
        return;
    }
  };

  const updateCategories = () => {
    const currentState = apiStore.getCurrentState();
    console.log('Received Categories: ' + JSON.stringify(currentState.categories));
    setCategories(currentState.categories);
  };

  const handleCategoryPress = async (categoryId) => {
    const updatedTransaction = {
      ...transactions[index],
      category_id: categoryId,
    };

    await apiActions.updateTransaction(transactions[index].id, updatedTransaction);

    if (updateTransaction) {
      updateTransaction(updatedTransaction);
    }

    navigation.goBack();
  };
 
  
  const renderCategory = ({ item }) => (
    <View style={{flex: 1, height: size/4, justifyContent: 'center', alignItems: 'center'}}>
      <View style={[styles.emojiContainer,  {backgroundColor: item.color, width: '61px',
height: '61px'}]}>
      <Text onPress={() => handleCategoryPress(item.id)} style= {[styles.emoji, {fontWeight: '600', left: 'calc(50% - 30.22px/2 - 114.78px)', fontSize: '28px',
  lineHeight: '34px'}]}>{item.emoji} </Text>
      </View>
      <Text style={styles.categoryScreenName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.categoryContainer}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
      />
    </View>
  );
}
