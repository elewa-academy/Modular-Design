var controller = {
	model: {},
	view: {},
	logic: {},
    add: function(a, b) {
        var lastResult = this.model.getLastResult();
        var result = this.logic.add(a, b, lastResult);
        console.log(result)
        this.model.setLastResult(result);
        this.view.render(result);
    }
};


module.exports = controller;