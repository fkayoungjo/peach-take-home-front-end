import Reflux from 'reflux';

const BASE_URL = 'http://localhost:3000';

const apiActions = Reflux.createActions({
  getCategories: { asyncResult: true },
  getMerchants: { asyncResult: true },
  getTransactions: { asyncResult: true },
  updateTransaction: { asyncResult: true, children: ['completed', 'failed']},
});


apiActions.getCategories.listen(() => {
  const reqUrl = `${BASE_URL}/categories`;

  fetch(reqUrl)
    .then(data => data.json())
    .then(data => {
      apiActions.getCategories.completed({
        data: data,
      });
      console.log('apiActions.getCategories - success!');
    })
    .catch(error => {
      console.error('apiActions.getCategories - error! ', error);
      apiActions.getCategories.completed({
        data: error,
        loadFail: true,
      });
    })
});

apiActions.getMerchants.listen(() => {
  const reqUrl = `${BASE_URL}/merchants`;
  fetch(reqUrl)
    .then(data => data.json())
    .then(data => {
      apiActions.getMerchants.completed({
        data: data,
      });
      console.log('apiActions.getMerchants - success!');
    })
    .catch(error => {
      console.error('apiActions.getMerchants - error! ', error);
      apiActions.getMerchants.completed({
        data: error,
        loadFail: true,
      });
    })
});

apiActions.getTransactions.listen(() => {
  const reqUrl = `${BASE_URL}/transactions`;
  fetch(reqUrl)
    .then(data => data.json())
    .then(data => {
      apiActions.getTransactions.completed({
        data: data,
      });
      console.log('apiActions.getTransactions - success!');
    })
    .catch(error => {
      console.error('apiActions.getTransactions - error! ', error);
      apiActions.getTransactions.completed({
        data: error,
        loadFail: true,
      });
    })
});

apiActions.updateTransaction.listen(function(transactionId, updatedTransaction) {
  return fetch(`${BASE_URL}/transactions/${transactionId}`, {
    method: 'PATCH',
    body: JSON.stringify(updatedTransaction),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(
    response => response.json()
  ).then(data => {
    apiActions.updateTransaction.completed({
      data: data,
    });
    console.log('apiActions.updateTransaction - success!');
  }).then(
    data => this.completed(data)
  ).catch(
    error => this.failed(error)
  );
});

export default apiActions;
