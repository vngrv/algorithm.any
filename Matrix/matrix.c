#include <stdio.h>

void matrix(int heigth, int width) {
	int matrix[heigth][width];
	for(int i = 0; i < heigth; i++) {
		for (int j = 0; j < width; ++j) {
			/* code */
			matrix[i][j] = j;
		}
	}

	for(int i = 0; i < heigth; i++) {
		for (int j = 0; j < width; ++j) {
			/* code */
			printf("%d ", matrix[i][j]);
		}
		printf("\n");
	}

}

int main() {
  matrix(4,5);
  return 0;
}

