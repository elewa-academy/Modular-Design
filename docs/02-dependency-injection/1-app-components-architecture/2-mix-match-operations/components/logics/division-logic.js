module.exports = function (a, b, lastResult) {
                        let result = 1;
                        if (a && b) {
                            if (b != 0) {
                            	result = a / b;
                            } else {
                            	result = 0;
                            };
                        } else if (a) {
                            if (b != 0) {
                            	result = lastResult / a;
                            } else {
                            	result = 0;
                            };
                        } else if (b){
                            if (b != 0) {
                            	result = lastResult / b;
                            } else {
                            	result = 0;
                            };
                        } else {
                            result = lastResult;
                        }
                        return result;
                    };


// This module makes the controversial claim that x/0 = 0.