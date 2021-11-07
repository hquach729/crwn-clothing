import { RootState } from '../store';
import { createSelector } from 'reselect';

const selectDirectory = (state: RootState) => state.directory;

export const selectSection = createSelector(
	[selectDirectory],
	(directory) => directory.sections
);
