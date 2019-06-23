function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
 console.log('Hello'.toUpperCase())
}
function logWhisper(string) {
  console.log('Hello'.toLowerCase())
}
function sayHiToGrandma (string) {
  if (logWhisper)
  return ('I can\'t hear you!')
  
  else if (logShout)
  return ("YES INDEED!")
  
  else if ("I love you, Grandma.")
  return ("I love you, too.")
}