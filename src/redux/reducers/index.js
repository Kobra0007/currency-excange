import { combineReducers } from 'redux';

import main from './main';
import currency from './currency';

export default combineReducers({
  main,
  currency,
});
