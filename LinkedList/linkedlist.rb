class Node
	def initialize(data, nextNode = nil)
		@data = data
		@next = nextNode
	end
end

class LinkedList
  def initialize
    @head = nil
  end

  def insertAtBeginnig(data)
    @head = Node.new(data, @head)
  end

  def insertAtEnd(data)
    newNode = Node.new(data)

    if @head.blank?
      @head = newNode
    end

    tail = @head
  end
end

list = LinkedList.new()
list.insertAtBeginnig('a')
list.insertAtBeginnig('b')
list.insertAtBeginnig('c')
list.insertAtBeginnig('d')
p list



