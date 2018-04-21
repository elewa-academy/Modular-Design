module.exports =  function() {

                            let args = process.argv.slice(2);
                            let operation = String(args[0])
                            let a = Number(args[1]);
                            let b = Number(args[2]);

                            if (isNaN(a)) {
                                a = false;
                            };
                            if (isNaN(b)) {
                                b = false;
                            };
                            
                            return [operation, a, b];
                        };

