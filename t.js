function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    //this.inOrder = inOrder;
}

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;

            if (n.data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                //console.log(n);
                //console.log('---------');
                current = current.right;
                //console.log(current);
                if (current == null) {
                    console.log('************');
                    console.log(n);
                    console.log('************');
                    parent.right = n;
                    console.log('------------');
                    console.log(parent.right);
                    console.log('------------');

                    break;
                }
            }
        }
    }
};


var nums = new BST();
nums.insert(23);
//console.log(nums.root);

nums.insert(45);
//console.log(nums.root);

nums.insert(16);
//console.log(nums.root);

/*
nums.insert(37);
console.log(nums.root);
*/

nums.insert(2);
//console.log(nums.root);

nums.insert(3);
console.log(JSON.stringify(nums.root));

/*
nums.insert(99);
console.log(nums.root);
nums.insert(22);
console.log(nums.root);
*/
