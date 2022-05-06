import {combineReducers} from 'redux';
import RegisterWithPeoplePhoneNumberReducer from './RegisterWithPeoplePhoneNumberReducer';
import RegisterWithPeopleCheckSmsCodeReducer from './RegisterWithPeopleCheckSmsCodeReducer';
import LoginWithPhoneReducer from './LoginWithPhoneReducer';
import CreatePasswordReducer from './CreatePasswordReducer';
export const rootReducer = combineReducers({
  RegisterWithPeoplePhoneNumberReducer,
  RegisterWithPeopleCheckSmsCodeReducer,
  LoginWithPhoneReducer,
  CreatePasswordReducer,
});
