package structpackage

import "fmt"

type Person struct {
	Name string
	Age  uint
}

func (p *Person) SayName() {
	fmt.Println(p.Name)
}

func (p *Person) SayAge() {
	fmt.Println(p.Age)
}
