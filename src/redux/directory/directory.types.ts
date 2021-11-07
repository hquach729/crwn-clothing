export enum DirectoryActionTypes {
	GET_DIRECTORY_SECTIONS = 'GET_DIRECTORY)SECTIONS',
	UPDATE_DIRECTORY_SECTIONS = 'UPDATE_DIRECTORY_SECTIONS',
}

export interface Section {
	id?: number;
	title?: string;
	imageUrl?: string;
	linkUrl?: string;
	size?: string;
}
