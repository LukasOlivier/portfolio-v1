var app = document.querySelector("#home h2");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 25,

});

typewriter
  .typeString("Student applied computer science")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Musician")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Head leader of youth movement 'KSA Izegem'") 
  .pauseFor(1000)
  .deleteAll()
  .start();

  