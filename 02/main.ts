import { readLines } from 'https://deno.land/std@0.208.0/io/mod.ts'
import * as path from 'https://deno.land/std@0.208.0/path/mod.ts'

// const filePath = path.join(Deno.cwd(), '02/input.txt')
const filePath = path.join(Deno.cwd(), '02/example.txt')
const reader = await Deno.open(filePath)

const limits = {
  red: 12,
  green: 13,
  blue: 14
}

const parseTurn = turn => {
  return turn.trim()
    .split(',')
    .map(info => {
      const [ count, color ] = info.trim().split(' ')
      return [ parseInt(count, 10), color ]
    })
}

const parseGame = line => {
  const [ game, turns ] = line.split(':').map(info => info.trim())
  const parsedTurns = turns.split(';').map(parseTurn)
  
  return [ game, parsedTurns ]
}

const isPossible = turns => {
  return turns.every(([ count, color ]) => {
    return limits[color] >= count
  })
}

const minimum = () => {}

let possible = 0;
for await (let line of readLines(reader)) {
  const [ game, turns ] = parseGame(line)
  turns.every(isPossible) && (possible += parseInt(game.replace('Game ', '').trim(), 10))
}

console.log(possible)
