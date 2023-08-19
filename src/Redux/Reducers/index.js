/* @flow */

import { combineReducers } from 'redux';

import Modal from './Modal';
import Sidebar from './Sidebar';
import Other from './Other';

import Auth from './Auth';
import Recipes from './Recipes';
import Category from './Category';


export default combineReducers({
    Modal,
    Sidebar,
    Other,
    
    Auth,
    Recipes,
    Category,
})