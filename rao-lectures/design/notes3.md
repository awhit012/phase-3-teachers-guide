## Complex Design

## Final Projects!

  - PROCESS
    - 1 minute pitches. anyone can pitch, any number of times.
    - after pitches, the cohort will vote on projects. the top five will get made. at this point, any of the pitchers can choose to back out, and we'll choose one of the runner ups.
    - you'll all then list your top three choices. I'll do some sorting, and you'll have your teams.
    - you can check the repo for more details on the projects themselves, but the basic structure:
      - MVPs are due Monday, with code reviews.
      - No structure. all schedule determine  i won't be enforcing 9 am.

  - I feel like you are all worried more about what makes a good project
    (1) the pocket gophers, who had the best projects ive seen, shared this:
      - build something they would actually use.
      - do something small and do it well.
    - you're better than CRUD apps in rails. you're better than social networks, todo apps, and forums. The best projects tried to do something crazy. build a real time game. implement a crazy algorithm. create a live text editor. use hardware. Do something that's right on the edge of your understanding, that you couldn't do right now. you functionally have 8 days to build this thing. between four of you, that's between 350 and 400 development hours. You can do a lot.
  - as for projects themselves.
    - tools aren't interesting, concepts are interesting. the gophers did some work in firebase, ember, ios, etc. what made their apps cool is that they weren't hacky implementations. but solving right problems.
  - So i talked to the banana slugs. I've said it before, but testing and design are crucial.  If you have a solid foundation come Monday that you can refactor and extend with ease, you're in good shape. The worst final projects spend week 3 debugging. Don't. the banana slugs, in particular, had this feedback. because that cohort was so strong at testing, they had a chance to spend their last week implementing crazy features, including a redis integration and one-page app that included 40 routes.
    - the slugs we're also good at Establish good team communication and workflow. Have a KanBan board. Be upfront with your disagreements and concerns. What is your PR protocol? Do you pair? Do you do code review?

    - not a lot of rules. the one i will enforce, though, is no css framework. teams that use front-end frameworks spend hours and hours debugging their framework when they try to adjust it. I'm just trying to save you from yourself.


## Why Client Side apps?

  - ask for definitions.
  - mine: sites that consume a simple API and rely on JS to handle all templating.
  -  why?
    - user interaction
    - load times aren't any better, but they seem better.
    - there's actually one huge advantage: separation of view logic from your rails app
  - Hexagonal Design.
    - in reality, there is some business logic that is the core of a given feature. That is the APPLICATION. It has a series of adapters that connect to it, representing the data in certain ways. including the HTML, the database, an API, etc.
    - traditional web app is very, very tied to the display of data. this is not good.
    - instead, we can have a simple API, and the client is responsible for tempating. you can build an API that is consumed by JS for your front end -- and also by your iOS app, and your gem, etc.
    - is this hexagonal design? no. your application logic is still deeply tied to the persistence level, as well as with your web application. but this is better. At least its not tied to HTML.

### The observer pattern.

   - also known as pub-sub. Building simple objects is not particularly hard. If my site was google dashboard, this would not be particularly hard to design.
   - the problem is interaction. lets look at yelp. how do controllers talk to each other? A couple of possible solutions.
     - have an omnipotent controller that can control everything.
     - have all the controllers know about each other. global variables! this is also not great.
     - the solution I would suggest is the observer pattern.

     - yells out a message. "hey document, I added a search paramter!"
     - someone, somewhere is listening. "hey did anyone add a seach parameter? if so, update the page."
     - draw a diagram.

    http://www.igoogleportal.com/portal/index.php#tab/3
    http://www.yelp.com/search