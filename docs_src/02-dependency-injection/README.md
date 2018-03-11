# Dependency Injection

Model, View, Controller, Logic, Handler - a hyper-modular approach to application design. 

By extending the MVC architecture to include separate code for the Logic and the Handlers you will have a (relatively) intuitive way to begin exploring modular application design. You'll see how to repackage the same core functionality for deployment in different environments, or how to easily swap out functionality in an application already built for one environment.  

You'll be reading, running, diagramming and documenting code.  No writing code this time.


### Index
* [Learning Objectives](#learning-objectives)
* [Depednency Injection](#dependency-injection)
* [Specifications](#specifications)
* [Resources](#resources)

---

## Learning Objectives


* MVC-LH
* Dependency Injection
* App/Component Architecture

[TOP](#index)


---

## Dependency Injection

As you've already seen by using pseudocode and using specs to study source code, functionality and implementation are not the same thing.  This idea is central to Dependency Injection, also known as "developing to an interface".

### A Thought Experiment

Imagine a basic VC application with Controller & View objects.  Notice that the _controller_ object needs it's _view_ object to have a function called _render_ that takes in a String.  But it doesn't care what that function actually does! :
```
View: Object
  METHODS: 1
    render: Function
      ARGS: 1
        phrase: String
        Purpose: To be drawn onto the UI, for the user to see
      RETURNS: undefined
      BEHAVIOR: Writes _phrase_ into the UI
Controller: Object
  PROPERTIEs: 1
    view: A view object, as defined above
    	INITALIZED: empty
  METHODS: 1
    show_this: Function
      ARGS: 1
        phrase: String
        Purpose: A string to be displayed to the user
      RETURNS: undefined
      BEHAVIOR: Calls this.view.render() with _phrase_ as an argument.
```
Let's explore three different implementations of the _view_ object:
```js
let browser_view = {
    render: function(phrase) {
        let text_box = document.getElementById('text_box');
        text_box.innerHTML = phrase;
    }
};

let console_view = {
    render: function(phrase) {
        console.log(phrase);
    }
};

let bogus_view = {
    render: function(phrase) {
        this.render(phrase);
    };
};
```
A _controller_ object would just as happily use any 3 of these objects; all of them match the _view_ specs.  They all have a method called "render" that takes in a String.   This is __developing to an interface__.  By simply changing which _view_ object our _controller_ has (ie. injecting a dependency), we can run our app in the browser, terminal, or callstack purgatory!

Try it out yourself.  Write the controller object and practice using it to write to the DOM or the Console using the _view_ objects provided.

[TOP](#index)

---

## Specifications

The finished product for this project will be a repo with several branches, one for each application you read and analyzed:
* __master__: A README describing what you did and what you learned in this project.  It will contain links to each analysis branch on GitHub.
* __other branches__:  The other branches will be named after the specific projects.  They will include:
  * A main README
    * About this code
    * Install instructions
    * Ascii file structure
  * A markdown for each app
    * About application
      * Purpose, user stories, use cases
    * Use instructions
    * Sourcecode specs
    * Link to build-time diagram (explained below)
    * Run-time specs
  * Source code 
  * Build-time diagrams (one for each app)


[TOP](#index)

---

## Resources

Example Analysis:
* [MVC_list]()

Projects to Analyze:

Build-Time Diagrams:
still deciding how these should be

Dependency Injection:
* Funfunfunction:
  * [Dependency Injection](https://www.youtube.com/watch?v=0X1Ns2NRfks)
  * [Inversion of Control](https://www.youtube.com/watch?v=-kpEP4JeEdc) (Tricky)
* [Fleeboy Article](https://medium.com/@fleeboy/dependency-injection-in-javascript-9db9ea6e4288)
* [Krasimirtsonev](http://krasimirtsonev.com/blog/article/Dependency-injection-in-JavaScript)

Challenge Articles:
* [DI & Testing](https://medium.com/@daniel.oliver.king/dependency-injection-practical-examples-for-testing-and-refactoring-in-javascript-3cb5b58b50be)
* [Inversion of Control](http://blog.wolksoftware.com/the-current-state-of-dependency-inversion-in-javascript)

[TOP](#index)


___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

