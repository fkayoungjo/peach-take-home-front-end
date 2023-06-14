import AsyncStorage from '@react-native-async-storage/async-storage';
import Reflux from 'reflux';
import apiActions from '../actions/apiActions';

const apiDefaultData = {
  categories: {},
  merchants: {},
  transactions: {},
};

const apiStore = Reflux.createStore({
  init() {
    AsyncStorage.getItem('apiData', (err, data) => {
      if (!err) {
        let savedAppState = JSON.parse(data);
        this.apiData = Object.assign({}, savedAppState || apiDefaultData);
        this.listenTo(apiActions.getCategories.completed, this.getCategories);
        this.listenTo(apiActions.getMerchants.completed, this.getMerchants);
        this.listenTo(apiActions.getTransactions.completed, this.getTransactions);
        this.listenTo(apiActions.updateTransaction.completed, this.updateTransaction);
      }
    });
  },

  getCategories(data) {
    this.apiData.categories = data.data;

    this.saveCurrentState();
    this.trigger({ target: 'UPDATE_CATEGORIES' });
  },

  getMerchants(data) {
    this.apiData.merchants = data.data;

    this.saveCurrentState();
    this.trigger({ target: 'UPDATE_MERCHANTS' });
  },

  getTransactions(data) {
    this.apiData.transactions = data.data;

    this.saveCurrentState();
    this.trigger({ target: 'UPDATE_TRANSACTIONS' });
  },

  getCurrentState() {
    return this.apiData;
  },

  saveCurrentState() {
    AsyncStorage.setItem('apiData', JSON.stringify(this.apiData));
  },

  updateTransaction(data) {
  
    let updatedTransaction = data.data;
    
    let transactionIndex = this.apiData.transactions.findIndex(transaction => transaction.id === updatedTransaction.id);
    if (transactionIndex !== -1) {
      this.apiData.transactions[transactionIndex] = updatedTransaction;
    }
  
    this.saveCurrentState();
    this.trigger({ target: 'UPDATE_TRANSACTIONS' });
  },
});


export default apiStore;
