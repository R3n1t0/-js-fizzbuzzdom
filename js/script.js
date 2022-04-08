const container = document.querySelector(".container");
const limit = 104;

const dividFizz = 3
const dividBuzz = 5
const dividFizzBuzz = 15

for (let i=1; i <= limit; i++){
  const boxRl = document.createElement('div');
  boxRl.className = 'box';
  container.append(boxRl);
  boxRl.append(i);

  if(!(i % dividFizz) && (i % dividBuzz)){
    boxRl.classList.add("box-fizz");
    const fizz = ("fizz");

    boxRl.append(fizz)

  }else if(!(i % dividBuzz) && (i % dividFizzBuzz)){
    boxRl.classList.add("box-buzz");
    
    const buzz = ("buzz");
    boxRl.append(buzz);


  }else if(!(i % dividFizzBuzz)){
    boxRl.classList.remove("box-fizz");
    boxRl.classList.remove("box-buzz");
    boxRl.classList.add("box-fizz-buzz");

    console.log("boxRl");
    const fizzBuzz = ("fizzbuzz");
    boxRl.append(fizzBuzz);
  }
  
}