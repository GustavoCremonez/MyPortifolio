import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { LinkButton } from '../components/button/Button';
import { AiFillCaretDown } from '@react-icons/all-files/ai/AiFillCaretDown ';

import MyProfile from '/src/profile.jpg';
import './styles.css';

export function Home() {
	const [shouldShowButtons, setShouldShowButtons] = useState(true);
	const [lastYPos, setLastYPos] = useState(0);
	const myRef = useRef(null);

	const executeScroll = () => myRef.current.scrollIntoView();

	useEffect(() => {
		function handleScroll() {
			const yPos = window.scrollY;
			const isScrollingUp = yPos < lastYPos;

			setShouldShowButtons(isScrollingUp);
			setLastYPos(yPos);
		}

		window.addEventListener('scroll', handleScroll, false);

		return () => {
			window.removeEventListener('scroll', handleScroll, false);
		};
	}, [lastYPos]);

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

				<AiFillCaretDown
					className='arrowIcon'
					onClick={executeScroll}
				/>

				<motion.div
					className='buttonControl'
					animate={{ opacity: shouldShowButtons ? 1 : 0 }}
					initial={{ opacity: 0 }}>
					<LinkButton
						href='https://github.com/GustavoCremonez'
						button='FiGithub'
					/>
					<LinkButton
						href='https://www.linkedin.com/in/gustavocremonez/'
						button='FiLinkedin'
					/>
				</motion.div>
			</div>
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
