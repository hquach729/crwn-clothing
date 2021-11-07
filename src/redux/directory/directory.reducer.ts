// import { Action, AnyAction } from 'redux';
import { DirectoryActionTypes } from './directory.types';
import data from '../../data/sections.data';

const initialState = {
	sections: data,
};

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

type DirectoryAction = GetDirectoryAction | UpdateDirectoryAction;

const directoryReducer = (state = initialState, action: DirectoryAction) => {
	switch (action.type) {
		// case DirectoryActionTypes.GET_DIRECTORY_SECTIONS:
		// 	// return state.sections;
		// 	return state;
		// case DirectoryActionTypes.UPDATE_DIRECTORY_SECTIONS:
		// 	return { ...state, sections: [...state.sections, action.payload] };
		default:
			return state;
	}
};

export default directoryReducer;
