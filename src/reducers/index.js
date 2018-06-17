import { combineReducers } from 'redux';
import locationInput from './locationInput';
import counter from './counter';


export default combineReducers({
  locationInput,
  counter,
});

