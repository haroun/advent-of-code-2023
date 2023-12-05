import { readLines } from 'https://deno.land/std/io/mod.ts'
import * as path from 'https://deno.land/std/path/mod.ts'

const filePath = path.join(Deno.cwd(), '01/input.txt')
const reader = await Deno.open(filePath)

const getCalibrationValue = (line) => {
	const digits = line.match(/[0-9]+/g).join('')
	return parseInt(`${digits.at(0)}${digits.at(-1)}`, 10)
}

let calibration = 0;
for await (let line of readLines(reader)) {
	calibration += getCalibrationValue(line)
}

console.log(calibration)
