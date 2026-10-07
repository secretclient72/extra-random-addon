#!/usr/bin/env node
import { randint, randfloat, randrandint, rand_colour_rgb, rand_colour_hex, minimum, maximum, letters, choice, rand_boolean } from "extra-random-addon"
const args = process.argv.slice(2)
if (args[0] === "randint"){
    const min = parseInt(args[1])
    const max = parseInt(args[2])
    console.log(randint(min,max))
}
else if (args[0] === "randfloat"){
    const min = parseFloat(args[1])
    const max = parseFloat(args[2])
    const dp = args[3] !== undefined ? parseInt(args[3], 10) : undefined
    console.log(randfloat(min, max, dp))
}
else if (args[0] === "randrandint"){
    console.log(randrandint())
}
else if (args[0] === "minimum"){
    console.log(minimum)
}
else if (args[0] === "maximum"){
    console.log(maximum)
}
else if (args[0] === "letters"){
    console.log(letters)
}
else if (args[0] === "rand_colour_rgb"){
    console.log(rand_colour_rgb())
}
else if (args[0] === "rand_colour_hex"){
    console.log(rand_colour_hex())
}
else if (args[0] === "choice"){
    console.log(choice(args[1]))
}
else if (args[0] === "rand_boolean"){
    console.log(rand_boolean())
}
else if (args[0] === "help"){
    const help = 
    `Syntax:
    npx preview-random randint <min> <max>
    npx preview-random randfloat <min> <max> <dp>
    npx preview-random randrandint
    npx preview-random minimum
    npx preview-random maximum
    npx preview-random letters
    npx preview-random rand_colour_rgb
    npx preview-random rand_colour_hex
    npx preview-random choice <array>
    npx preview-random rand_boolean`
    console.log(help)
}