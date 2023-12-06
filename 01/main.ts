import { readLines } from 'https://deno.land/std@0.208.0/io/mod.ts'
import * as path from 'https://deno.land/std@0.208.0/path/mod.ts'

const filePath = path.join(Deno.cwd(), '01/input.txt')
const reader = await Deno.open(filePath)
// const cardinals = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ]

const cardinalToDigitReplacer = (match, zero, one, two, three, four, five, six, seven, eight, nine) => '0123456789'
const cardinalToDigit = (line) => {
	return line.replace(/(zero)|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)/g, cardinalToDigitReplacer)
}

const getCalibrationValue = (line) => {
	const digits = line.match(/[0-9]+/g).join('')
	return parseInt(`${digits.at(0)}${digits.at(-1)}`, 10)
}

let calibration = 0;
for await (let line of readLines(reader)) {
	console.log(cardinalToDigit(line))
	calibration += getCalibrationValue(line)
}

console.log(calibration)
