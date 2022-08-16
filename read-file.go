package main

import (
	"fmt"
	"os"
	"time"
)

func main() {
	fmt.Printf("AGORA VAI - GO!!!!")
	start := time.Now()

	dat, _ := os.ReadFile("bigCsvFile.csv")
	fmt.Printf(string(dat))

	elapsed := time.Since(start)
	fmt.Printf("Go took %s seconds", elapsed)
}
