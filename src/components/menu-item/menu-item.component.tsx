import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Section } from '../directory-menu/directory-menu.component';
import './menu.item.styles.scss';

interface MenuItemProps extends Section, RouteComponentProps {
	subtitle?: string;
}

const MenuItem = ({
	title = '',
	subtitle = '',
	imageUrl,
	size,
	history,
	match,
	linkUrl,
}: MenuItemProps) => (
	<div
		className={`${size ? size + ' menu-item' : 'menu-item'}`}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<div
			className='background-image'
			style={{ backgroundImage: `url(${imageUrl})` }}
		/>
		<div className='content'>
			<h1 className='title'>{title.toLocaleUpperCase()}</h1>
			<span className='subtitle'>{subtitle}</span>
		</div>
	</div>
);

export default withRouter(MenuItem); // use of HOC, high order component
