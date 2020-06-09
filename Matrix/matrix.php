<?php 

class Matrix 
{
    private $width = null;
    private $heigth = null;
    private $matrix = null;

    public function __constructor($heigth, $width) 
    {
        $this->width = $width;
        $this->heigth = $heigth;
    }

    public function dump() 
    {
        return $this->matrix;
    }

    public function generate() 
    {
        for($i = 0; $i < $this->heigth; $i++)
        {
            $temp = [];
            for($j = 0; $j < $this->width; $j++) 
            {
                $temp[] = $j;
            }

            $this->matrix[] = $temp;

        }

    }
}


$matrix = new Matrix(4,5);
$matrix->generate();
$matrix->dump();
var_dump($matrix->dump());
