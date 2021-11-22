import { filter } from '../filter/filter-action';
import { createReducer } from '@reduxjs/toolkit';

export const filterReducer = createReducer('', {
	[filter]: (state, action) => action.payload,
});
