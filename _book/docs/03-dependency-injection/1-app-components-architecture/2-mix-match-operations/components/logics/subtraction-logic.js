module.exports = function(a, b, lastResult) {
					    let result = 0;
					    if (a && b) {
					        result = a - b;
					    } else if (a) {
					        result = lastResult - a;
					    } else if (b){
					        result = lastResult - b;
					    } else {
					        result = lastResult;
					    }
					    return result;
					};