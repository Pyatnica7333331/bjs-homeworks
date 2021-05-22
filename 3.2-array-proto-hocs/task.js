function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while(new Date().getTime() <= e) {}
};

function sum(...args) {
  sleep(100);
  return args.reduce((sum, arg) => {
    return sum += arg;
  }, 0);
}

function  compareArrays( arr1, arr2 ) {
  return arr1.length === arr2.length && arr1.every((currentValue , index) => 
    currentValue === arr2[index]
  ) 
};

function memorize(someFunc, limit=10) {
  const memory = [];
  return (...args) => {
    const elementFromMemory = memory.find((currentValue) => 
      compareArrays(currentValue.args, args));
    if (!elementFromMemory) {
      console.log("Не из памяти");
      memory.push({
        args : args,
        result : someFunc(...args) 
      });
      if (memory.length > limit) {
      memory.splice(limit);
      };
      return memory[memory.length - 1].result
    } else {
      console.log("Найдено в памяти");
      return elementFromMemory.result
    };
  };
}; 



