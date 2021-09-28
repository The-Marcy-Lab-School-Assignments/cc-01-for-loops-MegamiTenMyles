//1
function countToFifty(){
  for (let i = 1; i <= 50; i+=1){
      console.log(i)
  }
}

//2
function countFromOne(number){
    for (let i = 1; i <= number; i+=1){
        console.log(i)
    }
  
}

//3
function threeAndFiveInFifty(){
    for (let i = 1; i <= 50; i+=1){
        if (i % 3 == 0 || i % 5 == 0){
            console.log(i)
        }
    }
  
}

//4
function threeAndFive(number){
    for (let i = 1; i <= number; i+=1){
        if (i % 3 == 0 || i % 5 == 0){
            console.log(i)
        }
    }
  
  
}
function triple(numbers){
  const NewArray = numbers.map(x => x * 3);
  return NewArray
}
triple([5, 20, 30])