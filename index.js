// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if (blocks < 42){
    return  42 - blocks}
    if (blocks > 42){
        return  blocks - 42}
};

function distanceFromHqInFeet(value){
   return distanceFromHqInBlocks(value) * 264 
};

function distanceTravelledInFeet(start, destination) {
    if (start > destination)
    return (start - destination) * 264
    if (destination > start)
    return (destination - start) * 264
}

function calculatesFarePrice(start, destination) {
   let feet = distanceTravelledInFeet(start, destination)
   if (feet < 400)
   return 0
   else if (feet < 2000)
   return (feet - 400) * .02
   else if (feet < 2500)
   return 25
   else if (feet > 2500)
   return 'cannot travel that far'

  }