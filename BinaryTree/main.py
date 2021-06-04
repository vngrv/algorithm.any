class Node:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.p = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, k):
        t = Node(k)
        parent = None
        node = self.root

        while node != None:
            parent = node
            if node.key > t.key:
                node = node.left
            else:
                node = node.right
        t.p = parent

        if parent == None:
            self.root = t
        elif t.key < parent.key:
            parent.left = t
        else:
            parent.right = t
        return t

if __name__ == "__main__":
    bTree = BinaryTree();

    bTree.insert('test')
    bTree.insert('test1')
    bTree.insert('test1')
    bTree.insert('test2')
    bTree.insert('test2')
    bTree.insert('test3')
    bTree.insert('test3')
    bTree.insert('test4')
    bTree.insert('test4')
    bTree.insert('test5')
    bTree.insert('test5')

    print(bTree)
    pass
   