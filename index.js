// Code your solution in this file!
function distanceFromHqInBlocks(arg)
{
  return Math.abs(arg-42)
}

function distanceFromHqInFeet(ending){
  return 264 * distanceFromHqInBlocks(ending)
}

function distanceTravelledInFeet(beginning,ending){
  return 264 * Math.abs(ending - beginning)
}
