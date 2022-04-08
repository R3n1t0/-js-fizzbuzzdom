const container = document.querySelector(".container");
const limit = 104;
const dividFizz = 3
const dividBuzz = 5
const dividFizzBuzz = 15

for (let i=1; i <= limit; i++){
  const boxRl = document.createElement('div');
  boxRl.className = 'box';
  boxRl.append(i);
  container.append(boxRl)

  if(!(i % dividFizz)){
    boxRl.classList.add("box-fizz");
  }
  
  if(!(i % dividBuzz)){
    boxRl.classList.add("box-buzz");
  }

  if(!(i % dividFizzBuzz)){
    boxRl.classList.add("box-fizz-buzz");
  }
}