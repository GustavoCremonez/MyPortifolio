import './styles.css';

import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';

export function LinkButton(props) {
	return (
		<>
			<a
				href={props.href}
				target='_blank'
				className='gitButton'>
				{props.button == 'FiGithub' ? (
					<FiGithub size={25} />
				) : (
					<FiLinkedin size={25} />
				)}
			</a>
		</>
	);
}
