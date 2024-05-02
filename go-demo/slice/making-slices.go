package main

import "fmt"

func main() {
	a := make([]int, 5)
	printSlices("a", a) //a len=5 cap=5 [0 0 0 0 0]

	b := make([]int, 0, 5)
	printSlices("b", b) //b len=0 cap=5 []

	c := b[:2]
	printSlices("c", c) //c len=2 cap=5 [0 0]

	d := c[2:5]
	printSlices("d", d) //d len=3 cap=3 [0 0 0]
}

func printSlices(s string, x []int) {
	fmt.Printf("%s len=%d cap=%d %v\n",
		s, len(x), cap(x), x)
}
