//1
function countToFifty(){
  for (let i = 1; i <= 50; i++){
      console.log(i)
  }
}

//2
function countFromOne(number){
    for (let i = 1; i <= number; i++){
        console.log(i)
    }
  
}

//3
function threeAndFiveInFifty(){
    for (let i = 1; i <= 50; i++){
        if (i % 3 == 0 || i % 5 == 0){
            console.log(i)
        }
    }
  
}

//4
function threeAndFive(number){
    for (let i = 1; i <= number; i++){
        if (i % 3 == 0 || i % 5 == 0){
            console.log(i)
        }
    }
  
  
}

//5
function triple(numbers){
  const NewArray = numbers.map(x => x * 3);
  return NewArray
}

countFromOne(10)