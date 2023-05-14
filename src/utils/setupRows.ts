export function setupRows(
	currentWord: string,
	rowOne: string[],
	rowTwo: string[],
	rowThree: string[]
): void {
	for (let i = 0; i < currentWord.length; i++) {
		rowOne.push('_');
		rowTwo.push('_');
		rowThree.push('_');
	}
}
