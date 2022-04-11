const container = document.querySelector(".container");
const limit = 104;

for (let i=1; i <= limit; i++){
  const boxRl = document.createElement('div');
  boxRl.className = 'box';
  container.append(boxRl);
  let fizzBuzzDom = "";
  
  
  if(!(i % 15)){
    boxRl.classList.add("box-fizz-buzz");
    let fizzBuzzDom = "fizzbuzz";
    boxRl.append(fizzBuzzDom)
    
  }else if(!(i % 3)){
    boxRl.classList.add("box-fizz");
    let fizzBuzzDom = "fizz";
    boxRl.append(fizzBuzzDom)
    
  }else if(!(i % 5)){
    boxRl.classList.add("box-buzz");
    let fizzBuzzDom = "buzz";
    boxRl.append(fizzBuzzDom)
    
  }else{
    boxRl.append(i)
  }
}