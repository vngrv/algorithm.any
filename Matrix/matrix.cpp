#include <iostream>
#include <string>
 
class Matrix {
  private:
    int self_height;
    int self_width;

  public:
    Matrix(int height, int width) {
      self_height = height;
      self_width = width;
    }

    int getHeight() {
      std::cout <<  self_height;
      return self_height;
    }

    int getWidth() {
      std::cout << self_width;
      return self_width;
    }

    int generate() {
      int matrix[self_height][self_height];

      for(int i = 0; i < self_height; i++) {
        for(int j = 0; j < self_width; j++) {
            matrix[i][j] = j;
            std::cout << matrix[i][j] << " ";
        }
        std::cout << std::endl;
      }
      return 0;
    }
};
 
int main() {
  Matrix matrix(4,5);
  matrix.generate();
  return 0;
}