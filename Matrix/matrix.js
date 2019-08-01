class Matrix {
  constructor(heigth, width) {
    this.width = width;
    this.heigth = heigth;
    this.matrix = [];
    this.generate()
  }

  call() {
    console.log(this.matrix)
  }

  generate() {
    for (let i = 0; i < this.heigth; i++) {
      let temp = [];

      for (let j = 0; j < this.width; j++) {
          temp.push(j)
      }

      this.matrix.push(temp)
    }
  }

}

new Matrix(4, 5).call()
