import { LinkButton } from '../components/button/Button';
import './styles.css';

export function Home() {
	return (
		<div className='wrapper'>
			<h1 className='title'>Hey, I'm Gustavo Cremonez ;)</h1>
			<span className='span'>I'm a fullstack web developer</span>

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
		</div>
	);
}
