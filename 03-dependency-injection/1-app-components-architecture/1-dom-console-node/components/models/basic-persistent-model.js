const fs = require('fs');
const path = require('path');


let model = {
    lastResult: 0,
    setLastResult: function(new_last_result) {
    	fs.writeFileSync(path.join(__dirname, '../db.txt'), new_last_result);
    },
    getLastResult: function() {
    	var raw_last_result = fs.readFileSync(path.join(__dirname, '../db.txt'), 'utf8');
    	console.log(this.lastResult)
        return Number(raw_last_result);
    },
};


module.exports = model

