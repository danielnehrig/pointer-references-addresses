// Pass by Copy and Pass by Reference Tutorial

// Interface for obj
interface IObj {
  value: number;
}

// Func to mutate var
const mutateVar = (value: number): void => {
  value = 8;
};

// Func to mutate obj
const mutateObj = (obj: IObj): void => {
  obj.value = 20;
};

// Main Run execution
const main = (): number => {
  // Declare initalize Vars
  const value = 5;
  const obj = {
    value: 10,
  };

  // Print out current values
  console.log(`value = ${value}`);
  console.log(`obj.value = ${obj.value}`);

  // Mutate values
  console.log("mutating vars");
  mutateVar(value);
  mutateObj(obj);

  // Print out mutated values
  console.log(`value = ${value}`);
  console.log(`obj.value = ${obj.value}`);

  return 0;
};

// Exec main
main();
