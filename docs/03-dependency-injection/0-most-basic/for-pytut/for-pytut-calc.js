// pytut link: https://goo.gl/371Ud4

// -- the app --

let handler = {
    add: function() {
        controller.add(a, b);
    }
};


let controller = {
    add: function(a, b) {
        let lastResult = model.getLastResult();
        let result = logic.add(a, b, lastResult);
        model.setLastResult(result);
        view.render(result);
    }
};

let model = {
    lastResult: 0,
    setLastResult: function(new_last_result) {
        this.lastResult = new_last_result;
    },
    getLastResult: function() {
        return this.lastResult;
    },
};

let logic = {
    add: function(a, b, lastResult) {
        let result = 0;
        if (a && b) {
            result = a + b;
        } else if (a) {
            result = a + lastResult;
        } else if (b){
            result = b + lastResult;
        } else {
            result = lastResult;
        }
        return result;
    }
};

let view = {
    render: function(result) {
        console.log(result);
    }
};

// modify the variable declarations to pass arguments through the calc
let a = undefined;
let b = undefined;

// run app
// state (last result) before: 0 
handler.add();
// console.log: 0

// ---
a = 3
// state before: 0
handler.add();
// console.log: 3

// ---
b = 5
// state before: 3
handler.add();
// console.log: 8

// ---
a = undefined
// state before: 8
handler.add();
// console.log: 13