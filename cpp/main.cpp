#include <iostream>

using namespace std;

// Complex data struct similar to an object in js key value store
struct Object {
  int value;
};

void mutateVar(int *value) {
  *value = 10;
}

void mutateObj(struct Object *obj) {
  obj->value = 20;
}

int main(int argc, char* argv[]) {
  int value = 5;
  struct Object obj = {
    value = 10
  };

  // print init declared vars and complex data struct
  cout << "Print init vars" << endl;
  cout << "value: " << value << endl;
  cout << "value address: " << &value << endl;
  cout << "obj.value: " << obj.value << endl;
  cout << "obj.value address: " << &obj.value << endl;

  // mutate data per reference
  cout << "Mutate data" << endl;
  mutateVar(&value);
  mutateObj(&obj);


  // print mutated data
  cout << "Print mutated data" << endl;
  cout << "value: " << value << endl;
  cout << "value address: " << &value << endl;
  cout << "obj.value: " << obj.value << endl;
  cout << "obj.value address: " << &obj.value << endl;
  return 0;
}
