import { LinkButton } from '../components/button/Button';
import { AiFillCaretDown } from '@react-icons/all-files/ai/AiFillCaretDown ';

import MyProfile from '../../public/profile.jpg';
import './styles.css';

export function Home() {
	return (
		<div>
			<div className='wrapper'>
				<div className='textArea'>
					<h1 className='title'>Hey, I'm Gustavo Cremonez ;)</h1>
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
			<AiFillCaretDown className='arrowIcon' />
		</div>
	);
}
