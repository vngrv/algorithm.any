class Matrix:
	def __init__(self, height, width):
		self.heigth = height
		self.width = width
		self.matrix = self.generate()
		
	def call(self):
		print(self.matrix)

	def generate(self):
		matrix = []
		for i in range(self.heigth):
			temp = []

			for j in range(self.width):
				temp.append(j)

			matrix.append(temp)
		return matrix

if __name__ == '__main__':
	Matrix(4, 5).call()