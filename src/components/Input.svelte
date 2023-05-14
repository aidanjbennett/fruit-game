<script lang="ts">
	import { setupRows } from '../utils/setupRows';
	import { setBackgroundGreen, setBackgroundRed } from '../utils/setColors';
	import { answers } from '../data/answers';
	import Button from './Button.svelte';

	const lengthOfAnswersArray = answers.length;

	let randomNumber = Math.floor(Math.random() * lengthOfAnswersArray);
	let currentWord = answers[randomNumber];
	console.log('currentWord: ', currentWord);

	let points: number = 0;
	let hasWon: boolean = false;
	let currentRow: number = 1;

	let rowOne: string[] = [];
	let rowTwo: string[] = [];
	let rowThree: string[] = [];

	setupRows(currentWord, rowOne, rowTwo, rowThree);

	let isRowOneDisabled: boolean = false;
	let isRowThreeDisabled: boolean = true;
	let isRowTwoDisabled: boolean = true;

	// Check letter and color it green or red depending if its correct	or not
	function checkLetter(letter: string, index: number) {
		const lowerCaseLetter: string = letter.toLowerCase();

		let currentLetter: string = currentWord[index - 1];

		if (lowerCaseLetter === currentLetter) {
			setBackgroundGreen(index - 1, currentRow);
			points++;
		} else {
			setBackgroundRed(index - 1, currentRow);
			points--;
		}
	}

	function handleSubmit(event: Event) {
		event.preventDefault();
		let char;

		let index: number = 0;

		switch (currentRow) {
			case 1:
				for (char in rowOne) {
					index++;
					checkLetter(rowOne[char], index);
				}

				let rowOneGuessesAsString = rowOne.join('').toString();

				if (rowOneGuessesAsString == currentWord) {
					hasWon = true;
					console.log('has won');
				}

				break;
			case 2:
				for (char in rowTwo) {
					index++;
					checkLetter(rowTwo[char], index);
				}

				let rowTwoGuessesAsString = rowTwo.join('').toString();

				if (rowTwoGuessesAsString == currentWord) {
					hasWon = true;
					console.log('has won');
				}

				break;
			case 3:
				for (char in rowThree) {
					index++;
					checkLetter(rowThree[char], index);
				}

				let rowThreeGuessesAsString = rowThree.join('').toString();

				if (rowThreeGuessesAsString == currentWord) {
					hasWon = true;
					console.log('has won');
				}

				break;
			default:
				console.log('default');
				break;
		}

		if (!hasWon) {
			if (currentRow == 1) {
				currentRow = 2;
				isRowOneDisabled = true;
				isRowTwoDisabled = false;
				isRowThreeDisabled = true;
			} else if (currentRow == 2) {
				currentRow = 3;
				isRowOneDisabled = true;
				isRowTwoDisabled = true;
				isRowThreeDisabled = false;
			} else if (currentRow == 3) {
				currentRow = 1;
				isRowOneDisabled = true;
				isRowTwoDisabled = true;
				isRowThreeDisabled = true;
			}
		}
	}
</script>

<div class="justify-center">
	<div class="flex">
		<div>
			<form on:submit={handleSubmit}>
				<div class="row-1 flex">
					{#each currentWord as _, index}
						<input
							name="name"
							class="mx-1 my-2 block w-12 rounded-lg border-2 border-solid border-black bg-gray-300 px-4 py-2 text-center"
							type="text"
							bind:value={rowOne[index]}
							disabled={isRowOneDisabled}
							maxlength="1"
							id={'row-1-' + index.toString()}
						/>
					{/each}
				</div>
				<div class="row-2 flex">
					{#each currentWord as _, index}
						<input
							name="name"
							class="mx-1 my-2 block w-12 rounded-lg border-2 border-solid border-black bg-gray-300 px-4 py-2 text-center"
							type="text"
							maxlength="1"
							bind:value={rowTwo[index]}
							disabled={isRowTwoDisabled}
							id={'row-2-' + index.toString()}
						/>
					{/each}
				</div>
				<div class="row-3 flex">
					{#each currentWord as _, index}
						<input
							name="name"
							class="mx-1 my-2 block w-12 rounded-lg border-2 border-solid border-black bg-gray-300 px-4 py-2 text-center"
							type="text"
							bind:value={rowThree[index]}
							maxlength="1"
							id={'row-3-' + index.toString()}
							disabled={isRowThreeDisabled}
						/>
					{/each}
				</div>
				<div class="btns">
					<button
						class="rounded bg-black px-4 py-2 font-bold text-white hover:text-red-500 hover:underline"
						type="submit"
					>
						Guess
					</button>
					<Button text="Main Menu" link="/" />
				</div>
			</form>
		</div>
	</div>
	<h2 class="text-xl font-medium">Points {points}</h2>

	{#if hasWon}
		<h1>YOU WON</h1>
	{/if}
</div>
