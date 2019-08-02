echo ">> Matrix"
echo "============================="
echo "Node JS"
time node matrix.js

echo "============================="
echo "Python"
time python matrix.py

echo "============================="
echo "Ruby"
time ruby matrix.rb

echo "============================="
echo "GOlang"
time go run matrix.go
go build matrix.go 

echo "Binary"
time ./matrix

echo "============================="
echo "С++"
time g++ matrix.cpp

echo "Binary"
time ./a.out

echo "============================="
echo "C"
time gcc -o ./a ./matrix.c

echo "Binary"
time ./a