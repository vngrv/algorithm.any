<?php

class Entity {
    public $date;
    public $info;

    public function __construct($date, $info) {
        $this->date = $date;
        $this->info = $info;
    }
}

class Node {
    public $data;
    public $next;
}

class LinkedList {
    public $head;

    public function __construct() {
        $this->head = null;
    }

    public function instartAtBeginning($newElement) {
        $newNode = new Node();
        $newNode->data = $newElement;
        $newNode->next = null;

        if($this->head == null) {
            $this->head = $newNode;
        } else {
            $temp = new Node();
            $temp = $this->head;

            while($temp->head != null) {
                $temp = $temp->next;
            }

            $temp->next = $newNode;
        }
    }
}

/**
 * Usage
 * $MyList = new LinkedList();
 *
 * $MyList->push_back(new Entity('2020-12-12', array("key" => "value1")));
 * $MyList->push_back(new Entity('2020-12-13', array("key" => "value2")));
 * $MyList->push_back(new Entity('2020-12-14', array("key" => "value3" ));
 **/
