function checkLetter(letter: string, index: number) {
	// check what input the letter is in

	const lowerCaseLetter = letter.toLowerCase();

	console.log('letter', letter);

	let currentLetter: string = currentWord[index - 1];

	switch (currentRow) {
		case 1:
			rowOne.push(lowerCaseLetter);
			break;
		case 2:
			rowTwo.push(lowerCaseLetter);
			break;
		case 3:
			rowThree.push(lowerCaseLetter);
			break;
		default:
			console.log('default');
			break;
	}

	if (lowerCaseLetter === currentLetter) {
		setBackgroundGreen(index - 1, currentRow);
		hasWon = true;
		points++;
	} else {
		setBackgroundRed(index - 1, currentRow);
		points--;
	}

	let rowOneGuessesAsString = rowOne.join('').toString();

	if (rowOneGuessesAsString === currentWord && currentRow === 1) {
		hasWon = true;
		console.log('has won');
	}
}
