/*
Speed Limit demerit problem

speed limit = 70
if speed < 70 => ok
if speed > 70 and it divisible by 5 so return the quotient as a points

if points is > 12 return License suspend
*/

const output = checkSpeed(82);
console.log(output);


function checkSpeed(speed) {
    const speedLimit = 70;
    if (speed <= speedLimit + 5)
        return 'Ok';

    if (speed > speedLimit) {
        let difference = speed - speedLimit


        let points = Math.floor(difference / 5)
        if (points > 12)
            return 'License Suspended.'
        console.log('points', points)
    }
}