- my top object    
    - the 'link' method, adds a leaf to a leaf
    ```js
    // a class that will produce the top node of an inheritance tree
    // store each node's meta-data in a connected closure
    // store all getters/setters of this meta-data on the protopetual function
    // store link, compose, ... on the top function
    // objects just store their protected meta-data and public methods/props
    // can
        // use objects in tree with inheritance - referenced by variable names
        // create a new collapsed version of any referenced node
        // compose any two with inheritance - not commutative
        // compose any two with collapsing - not commutative
    // the tree works like this:
        // meta-data is stored with context
            // children, name
            // singly linked down by context. 
            // object of children, indexed by child's name so child can look itself up in another node.  
        // props are stored in inheritance 
            // singly linked up by proto only one parent, only one proto
        // a compose method that starts from the top down searching through context.
            // composes a subtree sharing top node with whole tree, and all children* containing that id it in children object. 
            // figure out why except for cool
        // a compose method that goes up via protos to build a single chain
        // why does children need to exist?
        // compose with inheritance - move sub-branch.  killer dog waiter
        // perhaps a different project? - multiple inheritance with adg
        
    function protopetual(name) {
        
    };
    
    var protopetual = {
        name: 'base object',
        children: [];
        link: function(name) {
           var new_obj = Object.create(this);
           new_obj.name = name;
           this.children.push(new_obj);
           return new_obj;
        };
        delete: function() {
            this.__proto__.children
        };
    };
    ```
    - the 'flatten' method
        - takes one of these and returns a composition of it's proto lookup
    - the 'merge' method 
        - combines the inheritances of 2 of these objects
    - https://github.com/cronvel/tree-kit