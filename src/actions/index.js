export const SELECT_CURRENCY= 'SELECT_CURRENCY';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REQUEST_QUOTE = 'REQUEST_QUOTE';
export const RECEIVE_QUOTE = 'RECEIVE_QUOTE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const TOGGLE_ARTICLE = 'TOGGLE_ARTICLE';

export const requestCurrency = currency => ({
  type: SELECT_CURRENCY,
  currency,
});

export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

export const receivedPosts = json => ({
  type: RECEIVE_POSTS,
  json: json,
});

export const requestPost = () => ({
  type: REQUEST_POST,
});

export const receivedPost = json => ({
  type: RECEIVE_POST,
  json: json,
}); 

export const requestQuote = () => ({
  type: REQUEST_QUOTE,
});

export const receivedQuote = json => ({
  type: RECEIVE_QUOTE,
  json: json,
}); 

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS
});

export const toggleArticle = show => ({
  type: TOGGLE_ARTICLE,
  show: show,
});

export function fetchPosts(currency) {
  return function (dispatch) {
    dispatch(toggleArticle(false));
    dispatch(requestPosts());
    return fetch(`https://api.coinmarketcap.com/v2/ticker/?limit=10&structure=array&convert=${currency}`)
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedPosts(json.data));
      },
    );
  };
}

export function fetchPost(currency, id) {  
  return function (dispatch) {
    dispatch(toggleArticle(false));
    dispatch(requestPost(id));
    return fetch(`https://api.coinmarketcap.com/v2/ticker/${id}/?structure=array&convert=${currency}`)
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedPost(json));
        dispatch(toggleArticle(true));
      },
    );
  };
}

export function fetchQuote(currency, id) {
  return function (dispatch) {
    dispatch(requestQuote());
    return fetch(`https://api.coinmarketcap.com/v2/ticker/${id}/?structure=array&convert=${currency}`)
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedQuote(json));
      },
    );
  };
}

export function fetchPostAndQuote(currency, id) {
  return function (dispatch) {
      dispatch(fetchPost(currency, id)).then(() => {
        dispatch(fetchQuote('BTC', id))
    })
  };
}

export function fetchCurrencyAndPosts(currency) {
  return function (dispatch) {
    dispatch(requestCurrency(currency));
    dispatch(fetchPosts(currency));
  };
}
