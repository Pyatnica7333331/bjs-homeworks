function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while(new Date().getTime() <= e) {}
};

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое //значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function  compareArrays( arr1, arr2 ) {
  return arr1.every((currentValue , index) => {return currentValue === arr2[index]}) && arr2.every((currentValue, index) => {return currentValue === arr1[index]})
  
};

function memorize(someFunc, limit=10) {
  const memory = [];
   if (memory.lenght > limit) {
    memory.splice(limit, memory.lenght - limit );
  } ; 
  
  if (memory.findIndex((currentValue, index) => {
    if (compareArrays(currentValue.args, ...args)) {
      console.log("из памяти");
      return currentValue.result
    }}) === -1)  { 
    
      return (...args) => {
        console.log("Не из памяти");
        memory.push({
            args : args,
            result : someFunc(...args) 
        });
        return someFunc(...args)
      };
    };
  
}; 



