// gesturer.js
const basic_model = (name = "none") => ({
    name,
    nextID: 00,
    DB: {},
    create () {},
    read_one () {},
    read_all () {},
    update () {},
    remove () {},
  });

const validation_model = (name = "none", schema) => {
    
    let validation_mixin = {
      schema,
      create () {}, // new version that validates
      update () {}, // new version that validates
      validate () {},
    };

    let basic_model = basic_model(name);

    return Object.assign(basic_model, validation_mixin);

  };

const searchable_model = (name = "none") => {
    
    let searchable_mixin = {
      find_by () {},
      find_by_challenges () {}
    };

    let basic_model = basic_model(name);

    return Object.assign(basic_model, searchable_mixinl);

  };

const searchable_validation_model = (name = "none", schema) => {
    
    let searchable_model = searchable_model(name, schema);

    let validation_model = validation_model(name, schema);

    return Object.assign(searchable_model, validation_model);
    
  };



// https://medium.com/@pyrolistical/factory-functions-pattern-in-depth-356d14801c91

