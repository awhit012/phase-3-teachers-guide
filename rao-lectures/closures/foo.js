


var counter = (function makeCounter(init) {
  var count = init


  return { countUp: function() {
                    count++
                    console.log(count)
                    return count } }
}(100))

controller = new controller(model, view)
counter.countUp()
counter.countUp()
























// foo = (function counterMaker() {
//   var count = 0

//   function increment() {
//     count++
//     console.log("the count is " + count)
//   }

//   return { countUp: increment }
// })()


// // foo = counterMaker()
// foo.countUp()
// foo.countUp()
// foo.countUp()

