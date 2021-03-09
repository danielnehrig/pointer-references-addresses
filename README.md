# Memory managment

## High Level vs Low Level

Low level = System near Languages Compiled Binaries  
High Level = Interpreter based languages abstraction ontop of Low Level Languages Interpreted code transformed to byte code

## Addresses

when you declare a variable or any kind of data type  
they have to be saved to memory and the reference of those in memory are called addresses/address

```typescript
const value: number = 5;
// example
// 0x7ffee43c608c - hex address in memory which holds the value 5 this represents the variable value declared and initialized above.
```

## Pointers / References

pointers hold the reference/address of a variable

```cpp
int *pointer = 0x7ffee43c608c; // this hex address containts the value 5 for example
// if you dereference the pointer you'll get the contents of the variable/address/reference
*pointer = 10;
cout << *pointer << endl; // will print 10
```

high level languages likes JS do not allow you to use pointers  
most commonly found in low level languages  
this does not mean that the concept of pointers and reference do not apply here  
but rather are invisable to the user but is worth understanding

# Why do you need to know this

its usefull to know what happens under the hood  
it gives you a more in depth look on how memory works on the os level  
and just shows you that a simingly missing feature is actually present  
on high level languages but differently packaged and managed
