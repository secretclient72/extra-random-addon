export function randint(min, max) {
    if (typeof min === "number" && typeof max === "number"){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    else {
        console.error("Error: one or both of the parameters are not numbers.")
    }
}
export function randfloat(min,max){
    if (typeof min === "number" && typeof max === "number"){
        return (Math.random() * (max - min + 1)) + min
    }
    else {
        console.error("Error: one or both of the parameters are not numbers.")
    }
}
export let minimum = -999999999999999
export let maximum = 999999999999999
export function randrandint(){
    let min = randint(minimum,maximum)
    let max = randint(minimum,maximum)
    while (min>max){
        min = randint(minimum,maximum)
        max = randint(minimum,maximum)
    }
    return randint(min,max)
}
export function rand_colour_rgb(){
    return ""+randint(0,255)+" "+randint(0,255)+" "+randint(0,255)+""
}
export function choice(array){
    if (typeof array == "object"){
        return array[randint(0,array.length-1)]
    }
    else {
        console.error("Error: parameter is not an array")
    }
}
export function rand_colour_hex(){
    return "#"+choice([0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'])+""+choice([0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'])+""+choice([0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'])+""+choice([0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'])+""+choice([0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'])+""+choice([0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'])+""
}
export function rand_boolean(){
    return choice([true,false])
}