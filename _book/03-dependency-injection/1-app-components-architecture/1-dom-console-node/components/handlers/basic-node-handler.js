module.exports = {
    add: function() {

        let args = process.argv.slice(2);
        let a = Number(args[0]);
        let b = Number(args[1]);

        if (isNaN(a)) {
            a = false;
        };
        if (isNaN(b)) {
            b = false;
        };
        
        this.controller.add(a, b);
    }
};

