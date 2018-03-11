var controller = {
	model: {},
	view: {},
	logic: {},
    operate: function(operation, a, b) {
        if (this.logic[operation] != undefined) {
            var lastResult = this.model.getLastResult();
            var result = this.logic[operation](a, b, lastResult);
            this.model.setLastResult(result);
            this.view.render(result);
        } else {
            this.view.render('invalid operation');
        };
    },
    help: function() {
        var operations = Object.getOwnPropertyNames(this.logic)
        this.view.render(operations);
    }
};


module.exports = controller;