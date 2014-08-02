## Design part 2

- talk about grocery list solutions. 15 minutes.
  - what are the different objects? what are the different interfaces.
  - don't over-create objects.
  - show my version.

- why design? its important as a programmer, and i think it differentiates serious programmers from casual ones. but also, its good for final projects. the problem is
  - don't have any tests.
  - don't have a sense of design.
  - so its really hard to extend or maintain! come monday, you're going to want to add a new feature. But if you aren't tested or designed, you are basically fucked.

- how to approach design:
  - don't worry too much about patterns. Design isn't a series of patterns to memorize.
  - so then what is good design? well, its fighting coupling by limiting dependencies. The end result is a series of objects with limited interfaces.
  - mvc is also some bullshit. rails uses mvc, but there's model code all over your views, and controllers are huuuuge.
  - We've given you some names of design patterns, but I feel like you need tools for evalatuing design.

- talk about OO. SOLID. Robert Martin, affectionately known as uncle bob.
  - Single Responsibility, Open/Closed principle, Liskov Substitution principle, interface segration principle, dependency inversion.

  - single responsibility: every object should have a single purpose.
     - this is the big one. rails does this wrong.
     - ***show multi-purpose controller***
     - flexible. you can swap pieces in and out, and lots of these things can be re-purposed
     - different parts of your program have different needs. Not everything need a presenter or adapter.
     - good for working in a group. These can all be reatively short pieces of code stored accross multiple files.
  - dovetails into open/closed principle. once you've written an object, you can't edit it, unless to fix bugs. MAINTAINABILITY. open for extension, closed for modification.
  - liskov substitution: You can swap in and out objects of the same type. Flexibility is key. Object's
  - interface segregation: objecs shouldn't implement all-purpose interfaces. should instead have a simple interface, with translation being handled by adapter or presenter classes.
  - dependency inversion: controllers shouldn't micromanage. the objects that are more likely to change should depend on the objects that are more stable, not the other way around.

-


DBC Connect resources
 - https://raw.githubusercontent.com/Devbootcamp/phase-3-teachers-guide/master/lecture/DBCConnectScreenShot.png
 - https://github.com/Devbootcamp/connect/blob/master/app/assets/javascripts/initialization.js
   - pair list, which is getting data from the server
   - login and logout
   - the profile link, which gets data on the individual.
   - the two dudes, which declare whether the user is ready to pair.
   - there's the map
     - default, which generates all users grouped by location.
     - search, which generates blue pins on the map
   - when you receive a notification to pair, appears in corner of page.
   - quote controller
