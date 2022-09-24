import './styles.css';

export function Tech(props) {
	return (
		<div className='technologies'>
			<h3>{props.name}</h3>

			<i className={props.logo}></i>
		</div>
	);
}
