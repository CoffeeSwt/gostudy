package main

import (
	"fmt"
	"math"
)

func add(x int, y int) int {
	return x + y
}

func main() {
	c := add(1, 2)
	fmt.Println(c)
	fmt.Println("Hello world")
	fmt.Println(math.Pi)
}
