object orientation!

- ENCAPSULATION
- KEEP YOU ON TRACK




- why design matters
  — ensures your code works.
  — developing an application is a marathon not a sprint (Rich Hickey of Clojure)
  . “A bad design with a complete test is still a bad design”

- why design? its important as a programmer, and i think it differentiates serious programmers from casual ones. but also, its good for final projects. the problem is
  - don't have any tests.
  - don't have a sense of design.
  - so its really hard to extend or maintain! come monday, you're going to want to add a new feature. But if you aren't tested or designed, you are basically fucked.

- how to approach design:
  - don't worry too much about patterns. Design isn't a series of patterns to memorize.
  - so then what is good design? well, its fighting coupling by limiting dependencies. The end result is a series of objects with limited interfaces.
  - mvc is also some bullshit. rails uses mvc, but there's model code all over your views, and controllers are huuuuge.
  - We've given you some names of design patterns, but I feel like you need tools for evalatuing design.

  SINGLE RESPONSIBILITY OBJECTS
  LIMITED INTERFACES
  THE GOAL IS THAT ONCE YOU WRITE AN OBJECT, YOU NEVER HAVE TO RE-OPEN IT, YOU CAN JUST