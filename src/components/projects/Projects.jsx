export function Projects(props) {
	return (
		<div className='cards'>
			<div className='card card-1'>
				<h2 className='card__title'>{props.title}</h2>
				<span>{props.text}</span>
				<div className='techs'>
					<ul className='tech-list'>
						{props.techs.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
				<p className='card__apply'>
					<a
						className='card__link'
						href={props.visit}
						target={props.target ? '' : 'blank'}>
						Visit now
					</a>
				</p>
			</div>
		</div>
	);
}
