// Pass by Copy and Pass by Reference Tutorial

// Interface for obj
interface IObj {
  value: number;
}

// Func to mutate var
const mutateVar = (value: number): void => {
  value = 10;
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

// Short takeaway
// in JS passing variables into a function are always pass by copy
// means mutating a var in a function will not change the original var reference
// objects are pass by reference
// and are mutatable
// a lot of dev that start with high level languages
// are often suprised by this
