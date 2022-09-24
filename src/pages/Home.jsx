import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { LinkButton } from '../components/button/Button';
import { Projects } from '../components/projects/Projects';

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
					<h1 className='title'>
						Hey, my name is Gustavo Cremonez
						<div className='emoji'>
							<span> :)</span>
						</div>
					</h1>
					<p className='subtitle'>I'm a fullstack web developer</p>
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

			<div className='TechExperience'>
				<h3
					ref={myRef}
					className='title'>
					My Stack
				</h3>
			</div>

			<div className='jobsArea'>
				<div className='textArea top'>
					<h3 className='title'>My Projects</h3>
					<span className='span'>Here are some of my projects</span>
				</div>

				<div className='projects'>
					<div className='main-container'>
						<Projects
							title='Chabar'
							text='website created with the intention of being an invitation to my chabar (meeting to help people move into their new home with gifts) and a guest control'
							techs={['NodeJS(Express)', 'EJS', 'MongoDB(Mongoose)', 'Bulma']}
							visit='https://chabarvihegu.com/'
						/>

						<Projects
							title='Portfólio (This)'
							text='where are you at the moment, my cover letter and presentation of my projects'
							techs={['ReactJS', 'CSS']}
							visit='#'
							target='false'
						/>

						<Projects
							title='API RESTful'
							text='RESTful API created in a test for employment, a simple CRUD and consumption of an external API all documentation is in the visit link'
							techs={['NodeJS(Express)', 'MongoDB(Mongoose)', 'AXIOS']}
							visit='https://github.com/GustavoCremonez/teste-integrado'
						/>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
