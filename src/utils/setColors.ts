export function setBackgroundRed(index: number, currentRow: number) {
	const input = document.getElementById(`row-${currentRow}-${index}`) as HTMLInputElement;

	input.style.backgroundColor = 'red';
}

export function setBackgroundGreen(index: number, currentRow: number) {
	// get the input element
	const input = document.getElementById(`row-${currentRow}-${index}`) as HTMLInputElement;

	// set the background color
	input.style.backgroundColor = 'green';
}
