//
// main.go
// Copyright (C) 2021 dNehrig <dNehrig@MNB049P.local>
//
// Distributed under terms of the MIT license.
//
// Pass by reference Tutorial

package main

import "fmt"

type Object struct {
  value int
}

func mutateVar(value *int) {
  *value = 10
}

func mutateObj(obj *Object) {
  obj.value = 20
}

func main() {
  // declare init vars and complex data type
  value := 5
  obj := Object{
    value: 10,
  }

  // print types
  fmt.Println("Print init vars")
  fmt.Println(value, obj.value)

  fmt.Println("Mutate vars and data struct")
  mutateVar(&value)
  mutateObj(&obj)

  fmt.Println("Print mutated vars")
  fmt.Println(value, obj.value)
}
