import colors

let story = []
let position = 0

function delay(ms: number)
{
    return new Promise( resolve => setTimeout(resolve, ms) );
}

function init()
{
  console.log("Story starting!".green)
  console.log((story[position]))
  delay(1000)
  next()
}

function next()
{
  position++
  console.log((story[position]))
  setTimeout(next, 5000)
}

init()
