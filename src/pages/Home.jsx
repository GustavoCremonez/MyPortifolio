import React, { useRef } from 'react';

import { LinkButton } from '../components/button/Button';
import { AiFillCaretDown } from '@react-icons/all-files/ai/AiFillCaretDown ';

import MyProfile from '../../public/profile.jpg';
import './styles.css';

export function Home() {
	const myRef = useRef(null);

	const executeScroll = () => myRef.current.scrollIntoView();

	return (
		<div>
			<div className='wrapper'>
				<div className='textArea'>
					<h1 className='title'>Hey, my name is Gustavo Cremonez ;)</h1>
					<span className='span'>I'm a fullstack web developer</span>
				</div>

				<img
					src={MyProfile}
					alt='My pic'
					className='profilePic'
				/>
			</div>
			<div className='buttonControl'>
				<LinkButton
					href='https://github.com/GustavoCremonez'
					text='My Github'
				/>
				<LinkButton
					href='https://www.linkedin.com/in/gustavocremonez/'
					text='My Linkedin'
				/>
			</div>
			<AiFillCaretDown
				className='arrowIcon'
				onClick={executeScroll}
			/>
			<div className='jobsArea'>
				<div className='textArea top'>
					<h2
						ref={myRef}
						className='title'>
						My Projects
					</h2>
					<span className='span'>Here are some of my projects</span>
				</div>
			</div>
		</div>
	);
}
