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
		<motion.div
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}>
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
					<h3
						ref={myRef}
						className='title'>
						My Projects
					</h3>
					<span className='span'>Here are some of my projects</span>
				</div>

				<div className='projects'>
					<div class='main-container'>
						<div class='cards'>
							<div class='card card-1'>
								<div class='card__icon'>
									<i class='fas fa-bolt'></i>
								</div>
								<h2 class='card__title'>Chabar</h2>
								<p class='card__apply'>
									<a
										class='card__link'
										href='https://chabarvihegu.com/'
										target='_blank'>
										Visit now<i class='fas fa-arrow-right'></i>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
