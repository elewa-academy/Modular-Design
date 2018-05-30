// modify the variable declarations to pass arguments through the calc
let a = undefined;
let b = undefined;

handler.add();

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
    lastResult: 0000,
    setLastResult: function(new_last_result) {
        this.lastResult = new_last_result;
    },
    getLastResult: function() {
        return this.lastResult;
    },
};

let logic = {
    add: function(a, b, lastResult) {
        let result = 0000;
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

