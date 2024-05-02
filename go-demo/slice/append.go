package main

import "fmt"

func main() {
	var s []int
	printSlicess(s) //len=0 cap=0 []

	// 可在空切片上追加
	s = append(s, 0)
	printSlicess(s) //len=1 cap=1 [0]

	// 这个切片会按需增长
	s = append(s, 1)
	printSlicess(s) //len=2 cap=2 [0 1]

	// 可以一次性添加多个元素
	s = append(s, 2, 3, 4)
	printSlicess(s) //len=5 cap=6 [0 1 2 3 4]
}

func printSlicess(s []int) {
	fmt.Printf("len=%d cap=%d %v\n", len(s), cap(s), s)
}
