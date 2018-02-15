import React from 'react';
import Nav from './Nav';
import './TabView.scss';

const TabView = props => (
	<div className="TabView">
		<div className="with-iconav">
			<Nav {...props}/>

			<div className="container">
				<header className="dashhead">
					<div className="dashhead-titles">
						<h6 className="dashhead-subtitle">
							{props.subtitle || props.portfolio.name}
						</h6>
						<h3 className="dashhead-title">
							{props.title}
						</h3>
					</div>
				</header>
				<main>
					{props.children}
				</main>
			</div>
		</div>
	</div>
);

export default TabView;