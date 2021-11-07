// import { Action, AnyAction } from 'redux';
import { DirectoryActionTypes } from './directory.types';
import data from '../../data/sections.data';
// import { AnyAction } from 'redux';

interface Section {
	id: number;
	title: string;
	imageUrl: string;
	linkUrl: string;
}
type GetDirectoryAction = {
	type: DirectoryActionTypes.GET_DIRECTORY_SECTIONS;
};
type UpdateDirectoryAction = {
	type: DirectoryActionTypes.UPDATE_DIRECTORY_SECTIONS;
	payload: Section;
};

const initialState = {
	sections: data,
};

type DirectoryAction = GetDirectoryAction | UpdateDirectoryAction;

const directoryReducer = (state = initialState, action: DirectoryAction) => {
	// const directoryReducer = (state = initialState, action: AnyAction) => {
	switch (action.type) {
		case DirectoryActionTypes.GET_DIRECTORY_SECTIONS:
			return state;
		// return state.sections;
		// case DirectoryActionTypes.UPDATE_DIRECTORY_SECTIONS:
		// 	return { ...state, sections: [...state.sections, action.payload] };
		default:
			return state;
	}
};

export default directoryReducer;
