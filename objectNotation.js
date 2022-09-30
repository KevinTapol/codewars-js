let stopwatch = {}

stopwatch.currentTime = 12

stopwatch.tellTime = function(time){
  console.log(`The current time is ${time}.`)
}

stopwatch.tellTime(stopwatch.currentTime)