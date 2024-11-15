package main

import "fmt"

func main() {
	var arr = []int{1, 2, 3}
	fmt.Println(arr)
	for i, v := range arr {
		fmt.Println("i=", i, "v=", v)
	}
}
