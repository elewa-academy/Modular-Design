# Dependency Injection

Model, View, Controller, Logic, Handler - a hyper-modular approach to application design.  By extending the MVC architecture to include separate code for the Logic and the Handlers you will have a (relatively) intuitive way to begin exploring modular application design.

You'll see how to repackage the same core functionality for deployment in different environments, or how to easily swap out functionality in an application already built for one environment.  

You'll be reading, running, diagramming and documenting code.  No writing code this time.


### Index
* [Learning Objectives](#learning-objectives)
* [Specifications](#specifications)
* [Resources](#resources)
* [Assessment](#assessment)

---

## Learning Objectives


* MVC-LH
* Dependency Injection
* App/Component Architecture

### Dependency Injection

As you've already seen by using pseudocode and using specs to study source code, functionality and implementation are not the same thing.  This idea is central to Dependency Injection.

Imagine a basic VC application with Controller & View objects:
* View: Object
  * Methods: 1
    * render: Function
      * Args: 1
        * phrase: String
        * Purpose: To be drawn onto the UI, for the user to see
      * Returns: undefined
      * Behavior: Writes _phrase_ into the UI
* Controller: Object
  * Methods: 1
    * show_this: Function
      * Args: 1
        * phrase: String
        * Purpose: A string to be displayed to the user
      * Returns: undefined
      * Behavior: Calls view.render() with _phrase_ as an argument.




[TOP](#index)

---

## Specifications

project specifications overview

link to more detailed specifications in repo if necessary


[TOP](#index)

---

## Resources

overview

### References

list of links to general-resources 

### Exercises


link to exercises that will practice new skills in this project, they will be stored in this project's folder in the repo

###  Examples

link to example/s of this project in the repo.
and to portfolios when they've done the project

### Code Alongs

link to code alongs that cover this project


[TOP](#index)

---

## Assessment

links to google forms
links to repo if there is a larger code-based assessment

[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

