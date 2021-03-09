using System;

namespace Pointers
{
  class refderef
  {
    static unsafe void unsafeMethod() {
      // Our Var Declared and initalized which is stored in memory heap
      int myNumber = 10;

      // Out declared pointer which does not hold any reference yet
      int* myPointer;

      // es assign our pointer the reference of myNumber which we declared above
      myPointer = &myNumber;

      // we print out the myNumber information and reference / pointer information
      Console.WriteLine($"Coming from unsafe method: {nameof(myNumber)} value is {myNumber}, and the pointer {nameof(myPointer)} with address: {(int)myPointer} has the following value: {*myPointer}");
    }
    static void Main(string[] args)
    {
      unsafeMethod();
      Console.ReadKey(); ;
    }
  }
}
