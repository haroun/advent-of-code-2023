import { readLines } from 'https://deno.land/std@0.208.0/io/mod.ts'
import * as path from 'https://deno.land/std@0.208.0/path/mod.ts'

const filePath = path.join(Deno.cwd(), '01/input.txt')
const reader = await Deno.open(filePath)

const cardinalToDigitReplacer = (match, oneight, twone, threeight, fiveight, eightwo, eighthree, nineight, one, two, three, four, five, six, seven, eight, nine) => {
	return (oneight && 18)
		|| (twone && 21)
		|| (threeight && 38)
		|| (fiveight && 58)
		|| (eightwo && 82)
		|| (eighthree && 83)
		|| (nineight && 98)
		|| (one && 1)
		|| (two && 2)
		|| (three && 3)
		|| (four && 4)
		|| (five && 5)
		|| (six && 6)
		|| (seven && 7)
		|| (eight && 8)
		|| (nine && 9)
		|| 0
}
const cardinalToDigit = (line) => {
	return line.replace(/(oneight)|(twone)|(threeight)|(fiveight)|(eightwo)|(eighthree)|(nineight)|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)/g, cardinalToDigitReplacer)
}

const getCalibrationValue = (line) => {
	const digits = line.match(/[0-9]+/g).join('')
	return parseInt(`${digits.at(0)}${digits.at(-1)}`, 10)
}

let calibration = 0;
for await (let line of readLines(reader)) {
	const asDigit = cardinalToDigit(line)
	calibration += getCalibrationValue(asDigit)
}

console.log(calibration)
