import { applyMiddleware, combineReducers, createStore } from 'redux';
import { profileReducer } from './profileReducer';
import { dialogsReducer } from './dialogsReducer';
import { sidebarReducer } from './sidebarReducer';
import { usersReducer } from './usersReducer';
import { authReducer } from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;