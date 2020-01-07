import { combineReducers } from 'redux';
import GeneralReducer from './general';
import AuthReducer from './auth';
import LanguageReducer from './language';

const rootReducer = combineReducers({
    general: GeneralReducer,
    auth: AuthReducer,
    language: LanguageReducer
});

export default rootReducer;