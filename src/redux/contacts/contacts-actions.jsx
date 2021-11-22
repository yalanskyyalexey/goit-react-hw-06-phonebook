import { ADD_CONTACT, REMOVE_CONTACT } from '../action-types';
import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction(ADD_CONTACT, (name, number) => ({
	payload: { name, number, id: shortid.generate() },
}));

export const removeContact = createAction(REMOVE_CONTACT);
