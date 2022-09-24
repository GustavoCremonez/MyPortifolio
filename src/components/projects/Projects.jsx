export function Projects(props) {
	return (
		<div class='cards'>
			<div class='card card-1'>
				<div class='card__icon'>
					<i class='fas fa-bolt'></i>
				</div>
				<h2 class='card__title'>{props.title}</h2>
				<span>{props.text}</span>
				<div className='techs'>
					<ul className='tech-list'>
						{props.techs.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
				<p class='card__apply'>
					<a
						class='card__link'
						href={props.visit}
						target={props.target ? '' : '_blank'}>
						Visit now<i class='fas fa-arrow-right'></i>
					</a>
				</p>
			</div>
		</div>
	);
}
