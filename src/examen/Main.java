import java.util.ArrayList;
import java.util.NoSuchElementException;
import java.util.Scanner;

class Treenode<T> {
    public T key;
    public Treenode left;
    public Treenode right;
}
class BinarySearchTree<T>  {
     class PreorderIterator {
        private Treenode current;
        public int index = 0;
        public PreorderIterator() {
            if (nodes.isEmpty()) {
                current = null;
                return;
            }
            current = nodes.get(0);
        }
        public boolean hasNext() {
            return current != null && (current.left != null || current.right != null);
        }
        public Treenode next() {
            if(current == null) {
                throw new NoSuchElementException("no more nodes");
            }
            Treenode next = current;
            if (current.left != null) {
                current = current.left;
            } else if (current.right != null) {
                current = current.right;
            } else {
                while (true) {
                    if (index == nodes.size() - 1) {
                        current = null;
                        break;
                    }
                    index++;
                    current = nodes.get(index);
                    if (current.left != null || current.right != null) {
                        break;
                    }
                }
            }
            return next;
        }
    }
    public PreorderIterator getPreorderIterator() {
        return new PreorderIterator();
    }
        public ArrayList<Treenode> nodes = new ArrayList<>();
    public void insert(T key) {
        Treenode node = new Treenode();
        node.key = key;
        if (nodes.isEmpty()) {
            nodes.add(node);
            return;
        }
        Treenode current = nodes.get(0);
        while (true) {
            if (key.hashCode() < current.key.hashCode()) {
                if (current.left == null) {
                    current.left = node;
                    nodes.add(node);
                    return;
                } else {
                    current = current.left;
                }
            } else {
                if (current.right == null) {
                    current.right = node;
                    nodes.add(node);
                    return;
                } else {
                    current = current.right;
                }
            }
        }

    }
}
class BinarySearchTreeFactory {
   static BinarySearchTree readTree(Scanner inpFile) {
        String firstline = inpFile.nextLine();
        if(firstline.equals("Integer")) {
            BinarySearchTree<Integer> tree = new BinarySearchTree<Integer>();
            while(inpFile.hasNextInt()) {
                tree.insert(inpFile.nextInt());
            }
            return tree;
        }
        else if(firstline.equals("Double")) {
            BinarySearchTree<Double> tree = new BinarySearchTree<Double>();
            while(inpFile.hasNextDouble()) {
                tree.insert(inpFile.nextDouble());
            }
            return tree;
        }
        else {
            BinarySearchTree<String> tree = new BinarySearchTree<String>();
            while(inpFile.hasNext()) {
                tree.insert(inpFile.next());
            }
            return tree;
        }
    }
}

public class Main {

    public static void main(String[] args) {
        try {
            Scanner inpFile = new Scanner(System.in);
            BinarySearchTree<?> t = BinarySearchTreeFactory.readTree(inpFile);
            BinarySearchTree.PreorderIterator it = t.getPreorderIterator();
            while (it.hasNext()) {
                Treenode node = it.next();
                System.out.println(node.key);
            }
            it.next(); // one more next(), to trigger the NoSuchElement exception
        //} catch (FileNotFoundException e) {
         //   System.out.println("eroare citire fisier"); // this will never happen on LambdaChecker
        //} catch (UnexpectedInputException e) {
        //    System.out.println("Unexpected input: "+e);
        } catch (NoSuchElementException e) {
            System.out.println("Iterator exception: "+e.getMessage());
        }
    }

}