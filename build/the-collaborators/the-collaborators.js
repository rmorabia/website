const members = [{
  name: "Andrew",
  role: "Founder",
  image: "/assets/img/andrewhedges.png",
  twitter: "https://twitter.com/segdeh",
  linkedin: "https://www.linkedin.com/in/andrewhedges/"
}, {
  name: "Stacie",
  role: "Mentor",
  image: "/assets/img/stacietaylorcima.png",
  twitter: "https://twitter.com/the_real_stacie",
  linkedin: "https://www.linkedin.com/in/stacietaylorcima/"
}, {
  name: "Alejandro",
  role: "Mentor",
  image: "/assets/img/alejandronanez.jpeg",
  twitter: "https://twitter.com/alejandronanez",
  linkedin: "https://www.linkedin.com/in/alejandronanez/"
}, {
  name: "Lars",
  role: "Mentor",
  image: "/assets/img/larsbrekken.jpeg",
  twitter: "https://twitter.com/labrekken",
  linkedin: "https://www.linkedin.com/in/lars-arne-brekken-365ba81/"
}, {
  name: "Steve",
  role: "Mentor",
  image: "/assets/img/stevegardner.jpg",
  twitter: "https://twitter.com/stevelikesmusic",
  linkedin: "https://www.linkedin.com/in/gardnersj/"
}, {
  name: "Joe",
  role: "Mentor",
  image: "/assets/img/joeseifi.jpeg",
  twitter: "https://twitter.com/joeseifi",
  linkedin: "https://www.linkedin.com/in/joeseifi/"
}, {
  name: "Michael",
  role: "Mentor",
  image: "/assets/img/michaelsholty.jpeg",
  twitter: "https://twitter.com/_MichaelSholty",
  linkedin: "https://www.linkedin.com/in/michael-sholty-74233825/"
}].map(member => `
  <div id="container">
    <img class="team-member" src="${member.image}" alt="${member.name} headshot">
    <span class="carousel-photo-credits">
    <p>${member.name} | ${member.role}</p>
        <a class="social-media-logo" href="${member.twitter}"><img src="/assets/img/twitter.png" width="20" height="20"/></a>
        <a class="social-media-logo" href="${member.linkedin}"><img src="/assets/img/linkedin.png" width="20" height="20"/></a>
    </span>
  </div>
  `).join("");

document.getElementById("team-gallery").innerHTML = members;