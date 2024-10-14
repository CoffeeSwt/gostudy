package main

import (
	"coffeemodlearn/structpackage"
	"coffeemodlearn/utils"
	"fmt"
)

func main() {
	fmt.Println("hello")
	utils.LogData("hello")
	p := &structpackage.Person{Name: "李华", Age: 18}
	p.SayAge()
	p.SayName()
}
