# Conscious Design Lecture

## Abstract

The goal of this lecture is to get the students to think in the terms of OO.
It also presents this discussion in implementation-language-neutral terms.  I
_happen_ to use JavaScript as the language of implementation, but we're talking
at a higher level here.

## Process

### Introductory lecture and magic words to use

* Elegance
* Clarity
* Minimum of touch-points
* Clarity of interfaces
* SOLID recap

### Present the DBCConnect image

Display this [image](./DBCConnectScreenShot.png), break into small teams and ask them to identify the MVC
present?  Or are there multiple MVC "Widgets" afoot.  What are your Objects,
what are your views, etc.  Ask the team lead to present for 5 minutes after
lunch.

### Presentations

Student "leads" present for ~ 5min. each

### My Version

### Show Golden Bears' Version

https://github.com/golden-bears-2014/DBCconnect/tree/master/app/assets/javascripts

#### Comments

* No central starting point
* No clear reason why some controllers have responsibility for doing some
  actions, etc.

### Show Golden Bears 'deconstruct-js-app-into-multiple-applets' branch

https://github.com/golden-bears-2014/DBCconnect/blob/deconstruct-js-app-into-multiple-applets/app/assets/javascripts/initialization.js

#### Comments

* Clear starting point: `initialization.js`
* A series of widgets that communicate with each other via an
  `applicationController` -- a "conscious" design

## FIN
