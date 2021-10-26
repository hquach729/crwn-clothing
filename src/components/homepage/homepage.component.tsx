import React from 'react';
import './homepage.styles.scss';

// interface HomePageProps {}
// interface HomePageState {}

const HomePage = () => (
	<div className='homepage'>
		<div className='directory-menu'>
			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>Hats</h1>
					<span className='subtitle'>Shop Now</span>
				</div>
			</div>
			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>Sneakers</h1>
					<span className='subtitle'>Shop Now</span>
				</div>
			</div>
			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>Jackets</h1>
					<span className='subtitle'>Shop Now</span>
				</div>
			</div>
			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>Women</h1>
					<span className='subtitle'>Shop Now</span>
				</div>
			</div>
			<div className='menu-item'>
				<div className='content'>
					<h1 className='title'>Men</h1>
					<span className='subtitle'>Shop Now</span>
				</div>
			</div>
		</div>
	</div>
);

// export class HomePage extends React.Component<HomePageProps, HomePageState> {
// 	constructor(props: HomePageProps) {
// 		super(props);
// 		console.log(this.props, this.state);
// 	}

// 	render() {
// 		return <div>HomePage</div>;
// 	}
// }

export default HomePage; // if we only planning to export one, use default
