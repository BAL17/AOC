import fs from 'fs'

const lines = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n')

// Combine the first digit and the last digit --> could be 3 + or only one but first and last only.
//Once found we want to concat numbers together to form new number 
// then store those in a obj like an arr to add them up and get the total value of all cal vals


function twoDigitNum(arr) {
  const regex = /\d/
  const calValArr = []

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].match(regex)) {
        calValArr.push(arr[i]); //IF WE WANT THEM TO BE NUMS VALUE ADD ++ TO PUSH STR[i]
      }
    } 
    return calValArr;
}

//function addCalVals() { }

console.log(twoDigitNum(lines));
