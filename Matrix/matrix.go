package main

import "fmt"

type Matrix struct {
	height int
	width int
}

func (this *Matrix) generate() [][]int {
	matrix := make([][]int, this.height)
    for i := 0; i < this.height; i++ {
        for j := 0; j < this.width; j++ {
            matrix[i] = append(matrix[i], j)
        }
    }
    return matrix
}

func main() {
	matrix := Matrix{4,5}
	fmt.Println(matrix.generate())
}