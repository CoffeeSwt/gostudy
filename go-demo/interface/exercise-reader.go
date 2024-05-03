package main

import "golang.org/x/tour/reader"

type MyReader struct{}

// TODO: 为 MyReader 添加一个 Read([]byte) (int, error) 方法。
func (r *MyReader) Read(b []byte) (n int, err error) {
	return 0, err
}

func main() {
	reader.Validate(MyReader{})
}
