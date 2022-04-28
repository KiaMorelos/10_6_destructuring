//Object Destructuring
const obj = {
   numbers: {
       a: 1,
       b: 2
   }
}

let {a, b} = obj.numbers

//Array Swap
const arr = [1, 2]
// [1, 2] = [2, 1] //firefox hates this, chrome didn't mind, it gave correct return value, it doesn't match springboards answer though.
[arr[0], arr[1]] = [arr[1], arr[0]]

//practice this again
// const kiasArr = [10, 9, 7, 8, 6, 5]
// [ kiasArr[2], kiasArr[3] ] = [ kiasArr[3], kiasArr[2]]

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})

//practice this again
const topThreeGames = ([one, two, three, ...runnerups]) => ({one, two, three, runnerups})
//array passed in ["Breath of the Wild", "Majora's Mask", "Ocarina of Time", "Twilight Princess", "Windwaker"]

//again
const characters = ({name="Bruce Wayne", job="CEO"}) => [name, job];
//pass in ({name: Oliver Queen}), return: ["Oliver Queen", "CEO"]