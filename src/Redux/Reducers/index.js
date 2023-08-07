/* @flow */

import { combineReducers } from 'redux';

import Modal from './Modal';
import Sidebar from './Sidebar';

import Other from './Other';

import Auth from './Auth';

export default combineReducers({
    Modal,
    Sidebar,
    Other,
    
    Auth,
})