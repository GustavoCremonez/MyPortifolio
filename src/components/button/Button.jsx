import './styles.css';

export function LinkButton(props) {
	return (
		<a
			href={props.href}
			target='_blank'
			className='gitButton'>
			{props.text}
		</a>
	);
}
