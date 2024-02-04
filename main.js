



const heights = [79 ,65, 66, 68, 72, 78, 60, 65, 66];

function getMax(numbers){
    let max = numbers[0];
    for(let number of numbers){
        if(number > max){
            max = number;
        }
        
    }
    return max;
}
const maxNum = getMax(heights);
console.log(maxNum);
