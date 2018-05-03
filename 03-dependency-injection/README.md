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

* Dependency Injection
* App/Component Architecture
* Source code vs. Build-time vs. Run-time
* Core app vs environment
* Reading & analyzing modular projects
* Design Patterns

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

No programming here.  You'll be reading and analyzing the code provided in [this project's repo](https://github.com/elewa-academy/Modular-Design/tree/master/02-dependency-injection).  The App/Component architecture is a way of organizing code that lets you mix & match functionalities, making it easy to adapt your applications for different environments and use cases.

There are 8 total applications built from reusable components.  Each application is significantly different in some little way, though they all use mostly the same source code.  Your task is to run, analyze, and document each separate application.  Your finished project will be a repository organized with branches.  Each branch will analyze a singe application.  

The finished product for this project will be a repo with 3 branches:
1. A master branch with:
  * README: Project overview, links to branches, notes
2. 2 code branches - dom-console-node & mix-match-operations. Each will contain:
  * A main README
    * About this code
    * Links to this branch's app files
    * Install instructions
    * Ascii file structure
    * Notes
  * A markdown for each app
    * About the app
      * Purpose, user stories, use cases
    * Use instructions
    * Sourcecode specs
    * Build-time diagram 
    * Run-time specs
  * The source code
3. Get and give at least one code review for this project.

([Example structure here](https://github.com/elewa-academy/Modular-Design/tree/master/02-dependency-injection/project-branch-structure))

### Build-Time Diagram

The build-time diagram is a way for you to explore how applications are dynamically assembled and built when you run them.  Understanding this is key to understanding source code, designing applications, and even debugging!  If you have difficulty mapping between source code and runtime code even the most basic runtime error can be indecipherable.

You can see an example [here](https://github.com/elewa-student/Analyzing-Architecture/tree/master).


[TOP](#index)

---

## Resources

Project resources:
* [MVC_list Demo](https://github.com/elewa-student/Analyzing-Architecture/tree/master)
* [Code to Analyze](https://github.com/elewa-academy/Modular-Design/tree/master/02-dependency-injection/1-app-components-architecture) 
* [MVC-LH Architecture](https://github.com/elewa-academy/General-Resources/tree/master/application-design/mvc-lh)


Dependency Injection:
* Funfunfunction:
  * [Dependency Injection](https://www.youtube.com/watch?v=0X1Ns2NRfks)
  * [Inversion of Control](https://www.youtube.com/watch?v=-kpEP4JeEdc) (Trickier)
* [Fleeboy Article](https://medium.com/@fleeboy/dependency-injection-in-javascript-9db9ea6e4288)
* [Krasimirtsonev](http://krasimirtsonev.com/blog/article/Dependency-injection-in-JavaScript)
* [src specs, build-time, runtime specs](https://gist.github.com/colevandersWands/71e67f8c24d448f118b6cfe6fafbd8a0)

Other Resources:
* [Exporting & Requiring](https://github.com/elewa-academy/Modular-Design/tree/master/02-dependency-injection/intro-to-modules)
* [Navigating CodeBase](https://github.com/elewa-academy/General-Resources/blob/fd7496884b7644247f1caebc35082e52316463da/programming-resources/navigating-codebase.md)
* [Visualizing Git Branches](https://stackoverflow.com/questions/3666953/showing-git-branch-structure)
* [Simpler Code to Practice Reading](https://github.com/elewa-academy/Modular-Design/tree/master/02-dependency-injection/0-most-basic)
* [DI & Testing](https://medium.com/@daniel.oliver.king/dependency-injection-practical-examples-for-testing-and-refactoring-in-javascript-3cb5b58b50be)
* [JS Runtimes](https://www.quora.com/What-is-the-difference-between-javascript-engine-and-javascript-runtime)
* [What is Node.js](https://www.infoworld.com/article/3210589/node-js/what-is-nodejs-javascript-runtime-explained.html)

Challenge Articles:
* [Inversion of Control](http://blog.wolksoftware.com/the-current-state-of-dependency-inversion-in-javascript)

[TOP](#index)



___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

