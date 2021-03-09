//
// main.go
// Copyright (C) 2021 dNehrig <dNehrig@MNB049P.local>
//
// Distributed under terms of the MIT license.
//

package main

import "fmt"

type Object struct {
  value int
}

func main() {
  // declare init vars and complex data type
  value = 5
  obj = Object{
    value: 10,
  }

  // print types
  fmt.println(value, obj.value)
}
