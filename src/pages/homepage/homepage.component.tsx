import React from 'react';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component';
// import { RouteComponentProps } from 'react-router-dom';
import './homepage.styles.scss';

// const HomePage = (props: RouteComponentProps) => (
const HomePage = () => (
	<div className='homepage'>
		<DirectoryMenu />
	</div>
);

export default HomePage; // if we only planning to export one, use default
