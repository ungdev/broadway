export const formatDate = (date: string) => {
	const months = [
		'janvier',
		'février',
		'mars',
		'avril',
		'mai',
		'juin',
		'juillet',
		'août',
		'septembre',
		'octobre',
		'novembre',
		'décembre',
	];

	const d = new Date(date);

	return `${d.getDate()} ${months[d.getMonth()]} ${
		d.getFullYear() !== new Date().getFullYear() ? d.getFullYear() : ''
	} à ${d.getHours()}h${d.getMinutes()}`;
};
