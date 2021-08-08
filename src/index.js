module.exports = function toReadable(number) {
	let numberStr = String(number)
	let index = 0
	let strokeNumber = ''
	let numbersText = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	if (number > 0 & number < 20) {
		strokeNumber = numbersText[number - 1]
	}
	if (number >= 1000 & number < 10000) {
		let numberStrOneToNine = Number(numberStr[index] - 1)
		strokeNumber += numbersText[numberStrOneToNine]

		strokeNumber += 'thousand'
		strokeNumber += ' '
		index += 1
	}
	if (number >= 100 & number < 10000) {
		let numberStrOneToNine = Number(numberStr[index] - 1)

		strokeNumber += numbersText[numberStrOneToNine]
		strokeNumber += ' '
		strokeNumber += 'hundred'
		index += 1
	}
	if (number >= 20 & number < 10000) {
		let lastNumbers = (Number(1 + (numberStr[index + 1]))) - 1
		if (numberStr[index] === '1' & numberStr[index + 1] !== '0') {
			if (number > 99) {
				strokeNumber += ' '
			}

			strokeNumber += numbersText[lastNumbers]
		}
		if (numberStr[index] === '1' & numberStr[index + 1] === '0') {
			if (number > 99) {
				strokeNumber += ' '
			}
			{ strokeNumber += numbersText[9] }
		}
		if (numberStr[index] === '2') {
			if (number > 99) {
				strokeNumber += ' '
			}
			strokeNumber += numbersText[19]
		}
		if (numberStr[index] === '3') {
			if (number > 99) {
				strokeNumber += ' '
			}
			strokeNumber += numbersText[20]
		}
		if (numberStr[index] === '4') {
			if (number > 99) {
				strokeNumber += ' '
			}
			strokeNumber += numbersText[21]
		}
		if (numberStr[index] === '5') {
			if (number > 99) {
				strokeNumber += ' '
			}
			strokeNumber += numbersText[22]
		}
		if (numberStr[index] === '6') {
			if (number > 99) {
				strokeNumber += ' '
			}
			strokeNumber += numbersText[23]
		}
		if (numberStr[index] === '7') {
			if (number > 99) {
				strokeNumber += ' '
			}
			strokeNumber += numbersText[24]
		}
		if (numberStr[index] === '8') {
			if (number > 99) {
				strokeNumber += ' '
			}
			strokeNumber += numbersText[25]
		}
		if (numberStr[index] === '9') {
			if (number > 99) {
				strokeNumber += ' '
			}
			strokeNumber += numbersText[26]
		}
		if (numberStr[index] !== '1' & numberStr[index + 1] !== '0') {
			strokeNumber += ' '
			let numberStrOneToNine = Number(numberStr[index + 1] - 1)
			strokeNumber += numbersText[numberStrOneToNine]
		}
	}
	if (number === 0) {
		strokeNumber = "zero"
	}
	return strokeNumber
}
