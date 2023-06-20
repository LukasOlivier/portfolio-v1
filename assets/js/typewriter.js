var app = document.querySelector("#home h2");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  deleteSpeed: 0.1,
});

typewriter
  .pauseFor(2500)
  .typeString("Student applied computer science")
  .pauseFor(500)
  .deleteAll()
  .typeString("Musician")
  .pauseFor(500)
  .deleteAll()
  .typeString("Video editor & Logo designer")
  .pauseFor(500)
  .deleteAll()
  .typeString("Student applied computer science")
  .pauseFor(1000)
  .start();
