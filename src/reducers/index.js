import { SELECT_CURRENCY, REQUEST_POSTS, RECEIVE_POSTS, REQUEST_POST, RECEIVE_POST, REQUEST_QUOTE, RECEIVE_QUOTE, TOGGLE_SETTINGS, TOGGLE_ARTICLE } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_CURRENCY:
      return { ...state, currency: action.currency };
    case REQUEST_POSTS:
      return { ...state, article: null, loading: true };
    case RECEIVE_POSTS:
      return { ...state, json: action.json, loading: false };
    case REQUEST_POST:
      return { ...state, loading: true };
    case RECEIVE_POST: 
      return { ...state, article: action.json.data[0], loading: false };
    case REQUEST_QUOTE:
      return { ...state, loading: true };
    case RECEIVE_QUOTE: 
      return { ...state, article: {...state.article, quotes: Object.assign(state.article.quotes, action.json.data[0].quotes) }, loading: false }
    case TOGGLE_SETTINGS:
      return { ...state, showSettings: !Boolean(state.showSettings) };
    case TOGGLE_ARTICLE:
      return { ...state, showArticle: action.show };
    default:
      return state;
  }
};

export default reducer;
