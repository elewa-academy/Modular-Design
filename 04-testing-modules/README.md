# Testing Modules


Writing tests for your code is one of the most important steps in the development process.  Good tests will help with documenting your code, QA, refactoring, maintenance, and everything in between.  

Everyone agrees that tests are important, but people argue to the ends of the internet about how to fit tests into the development process. Do you write them first? Do you test your code every couple minutes? Do you pass your code off to testers after writing it?  In this project you won't worry about any of that, the focus here is to get used to writing and reading tests.  

So far in with these projects we've talked about specs (args, return, behavior) as the measure of code - any code matching the same specs is interchangeable.  In this project you will take this idea to the next level:

> The tests define the module

This means that the tests you write and publish along with your code are the ultimate guide to your project.  
* Anyone should be able to read your test files and understand what your project does.
* Any code that passes your tests should be able to replace your module in an application.




### Index
* [Learning Objectives](#learning-objectives)
* [Specifications](#specifications)
* [Resources](#resources)

---

## Learning Objectives

* Tests define and document your modules
* Testing modular code
* Coming up with Test Cases
* Integrating tests into a codebase
* Using test cases to explain yourself
* Object State

### State

This is a concept that will come up again later when you learn about Functional Programming, and again when you learn React.  For now we'll stick to a very basic definition:

* State is any property in an object.

Pretty simple as far as concepts go, but it becomes complicated in practice when objects are changing their values all the time.  As you move through your developer journey you will probably come to appreciate the simplicity that comes with _stateless_ design.  The simplest instance of _stateful_ vs _stateless_ design is objects vs pure functions. 

In this project you'll experience first-hand one of the realms where stateful objects are more difficult to deal with than pure functions:  Testing. 

[TOP](#index)

---

## Specifications

Use Tressa.js & Istabul to write tests for you PJS Todo List.  You will be expected to write tests for both the Synchronous and Asynchronous versions of your application.  These tests will be added to their respective branches.  ie. The async tests will be added to the async branch, the synchronous tests will be added to the most recent syncronous branch. 

First read through the Testing articles and test library examples.

Then complete these steps:
* Sync source code & tests in one folder
  * Unit tests for the smallest bits: each file/component
  * Behavior tests for the largest bits: runtime code after it is built
  * A new section in the README: Code coverage & % Passing tests
* Async source code & tests in another folder
  * Unit tests for the smallest bits: each file/component
  * Behavior tests for the largest bits: runtime code after it is built
  * A new section in the README: Code coverage & % Passing tests
* An updated README
  * Include instructions for running the tests
  * Updated Notes section
  * Anything else you'd like to put in there
* /code-reviews
  * Ask at least one person for a code review


[TOP](#index)

---

## Resources

Assert:
* [In Node](https://nodejs.org/api/assert.html)
* [W3Schools](https://www.w3schools.com/nodejs/ref_assert.asp)
* [In the Browser](https://developer.mozilla.org/en-US/docs/Web/API/console/assert)
* [In the Terminal](https://github.com/rowanmanning/proclaim)

Testing:
* [Pt. 1 - Code Coverage](https://medium.com/@WebReflection/js-vanilla-test-code-coverage-7b7ba3740776)
* [Pt. 2 - Tressa](https://medium.com/@WebReflection/vanilla-js-testing-part-ii-63b9d736121)
* [Pure Functions, Easy Testing](https://github.com/foundersandcoders/ws-pure-functions-easy-testing)
* [Mocks, Stubs & Spies](https://gaboesquivel.com/blog/2014/unit-testing-mocks-stubs-and-spies/)

Tools:
* [Tressa in a NutShell](https://gist.github.com/WebReflection/00531a64bb7b846c9b78e059fc0441ff)
* [Tressa.js](https://github.com/WebReflection/tressa#tressa-%20%20jstinytest)
* [Istanbul.js](https://istanbul.js.org)


Code to Study:
* [Last project with tests](https://github.com/elewa-academy/Modular-Design/tree/master/04-testing-modules/sync-async-tested)
* [Minimal Testing Libraries](https://github.com/elewa-academy/Modular-Design/tree/master/04-testing-modules/minimal-testing-libraries)
* [Proclaim.js](https://github.com/rowanmanning/proclaim)
* [jsTinyTest](https://github.com/bennadel/TinyTestJS)
* [Klud](https://bitbucket.org/zserge/klud.js/)

Next Steps:
* [Async Unit Tests](https://martinfowler.com/articles/asyncJS.html)
* [Mocha/Chai](https://www.youtube.com/watch?v=MLTRHc5dk6s)




[TOP](#index)

---

## Assessment

links to google forms
links to repo if there is a larger code-based assessment

[TOP](#index)

___
___
### <a href="http://elewa.education/blog" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/34921062-506450ae-f97d-11e7-875f-6feeb26ad72d.png" width="100" height="40"/></a>

