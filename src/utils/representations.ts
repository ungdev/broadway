export const representations = [
	{
		name: 'Vendredi 5 Juin',
		value: 0,
	},
	{
		name: 'Samedi 6 Juin',
		value: 1,
	},
];

export const getRepresentation = (id: number) => {
	return representations.find((representation) => representation.value === id)?.name;
};
