class Matrix
  def initialize (heigth, width)
    @heigth = heigth
    @width = width 
    @matrix = generate()
  end

  def call
    p @matrix
  end

  def generate
    matrix = Array.new(@heigth)
    matrix.each_with_index do |cell, index|
      temp = Array.new(@width)
      
      temp.each_with_index do |cell, index|
        temp[index] = index
      end
      
       matrix[index] = temp
    end
  end
end

Matrix.new(4, 5).call
