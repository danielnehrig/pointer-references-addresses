/*
 * main.c
 * Copyright (C) 2021 dNehrig <dNehrig@MNB049P.local>
 *
 * Distributed under terms of the MIT license.
 */

#include <stdio.h>

// complex data type
struct Object {
  int value;
};

// Functions to mutate
void mutateValue(int *value) {
  // dereference pointer and set new value
  // if you would not dereference here yo would not try to assign a new value
  // but rather overwrite the address which this variable is pointing to
  *value = 10;
}

void mutateObj(struct Object *obj) {
  // same logic applies here
  obj->value = 20;
}

int main() {
  // init vars and complex struct
  int value = 5;

  struct Object obj = {
    .value = 5
  };

  // print init declared values
  printf("Print init vars\n");
  printf("value %d\n", value);
  printf("obj.value %d\n", obj.value);

  // mutate values
  printf("mutate data\n");
  mutateValue(&value);
  mutateObj(&obj);

  // print mutated values
  printf("Print mutated vars\n");
  printf("value %d\n", value);
  printf("obj.value %d\n", obj.value);

  return 1;
}
