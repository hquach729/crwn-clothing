import React from 'react';
import { Section } from '../directory-menu/directory-menu.component';
import './menu.item.styles.scss';

interface MenuItemProps extends Section {
	subtitle?: string;
}

const MenuItem = ({
	title,
	subtitle = 'SHOW NOW',
	imageUrl,
	size,
}: MenuItemProps) => (
	<div className={`${size} menu-item`}>
		<div
			className='background-image'
			style={{ backgroundImage: `url(${imageUrl})` }}
		/>
		<div className='content'>
			<h1 className='title'>{title?.toLocaleUpperCase()}</h1>
			<span className='subtitle'>{subtitle}</span>
		</div>
	</div>
);

export default MenuItem;
