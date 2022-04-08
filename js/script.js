const container = document.querySelector(".container");
const limit = 104;

const dividFizz = 3
const dividBuzz = 5
const dividFizzBuzz = 15

for (let i=1; i <= limit; i++){
  const boxRl = document.createElement('div');
  boxRl.className = 'box';
  container.append(boxRl);
  
  if(!(i % dividFizz) && (i % dividBuzz)){
    boxRl.classList.add("box-fizz");
    let fizzBuzzDom = "fizz";
    boxRl.append(fizzBuzzDom)

  }else if(!(i % dividBuzz) && (i % dividFizzBuzz)){
    boxRl.classList.add("box-buzz");
    let fizzBuzzDom = "buzz";
    boxRl.append(fizzBuzzDom)


  }else if(!(i % dividFizzBuzz)){
    boxRl.classList.add("box-fizz-buzz");
    let fizzBuzzDom = "fizzbuzz";
    boxRl.append(fizzBuzzDom)

  }else{
    boxRl.append(i)
  }
}