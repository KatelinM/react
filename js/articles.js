const FILTER1 = ["All specialities", "Spine", "Trauma","Ortho", "Dental"];
const FILTER2 = ["All sections", "Case Study", "Product Information", "Abstract summary"];
const FILTER3 = ["All audiences","Physics","Chemists"];
const ARTICLES =[
  {
    title:"Polymeric Materials for Articulating Motion Preservation Devices",
    image:"img/science.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"In a first, physicists accelerate atoms in the Large Hadron Collider",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }, {
    title:"How the Parker probe was built to survive close encounters with the sun",
    image:"img/science1.jpg",
    video:"https://www.youtube.com/embed/WvXYQ1QSFV4",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"People are bad at spotting fake news. Can computer programs do better?",
    image:"img/science2.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Trauma",
    section:"Product Information",
    audience:"Physics"
  },  {
    title:"What does Mars’ lake mean for the search for life on the Red Planet?",
    image:"img/science3.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Spine",
    section:"Abstract summary",
    audience:"Chemists"
  },  {
    title:"This tick may play a part in gumming up your arteries",
    image:"img/science4.jpg",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Dental",
    section:"Case Study",
    audience:"Chemists"
  },  {
    title:"A new quasiparticle lurks in semiconductors",
    image:"img/science5.jpg",
    video:"https://www.youtube.com/embed/KFS4oiVDeBI",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    speciality:"Ortho",
    section:"Abstract summary",
    audience:"Physics"
  }

];

class Filter extends React.Component{
  render() {
    return  <select className="filter-input" onChange={this.props.filterName}>
              { this.props.filterData.map((el,i)=>{
                  return <option key={i}> {el}</option>
                })
              }
            </select>
  }
};

class Video extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isOpen:false
    }
  }

  setIsOpen=(event)=> {
    this.setState({
        isOpen:!this.state.isOpen
    });
  }

  render() {
      return  <React.Fragment>
                {this.props.videoOpen ?
                  <div onClick={this.setIsOpen}>
                    <div className="popup"></div>
                    <div className="window">
                      <iframe
                        width="854"
                        height="480"
                        src={this.props.videoSrc}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen>
                      </iframe>
                    </div>
                  </div>
                  :
                  null
                }
              </React.Fragment>
  }
};

class Article extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      videoOpen:false
    }
  }

  setVideoOpen=(event)=> {
    this.setState({
        videoOpen:!this.state.videoOpen
    });
  }

  render() {
      return  <li className="article" onClick={this.setVideoOpen}>
                <img className={
                                  this.props.video ?
                                  "article-video"
                                  :
                                  "article-image"
                                }
                                src={this.props.image}
                                width="60px"
                                height="60px"
                />
                {
                  this.props.video ?
                  <img className="play" src="img/play.png"/>
                  :
                  null
                }
                <div className="article-info">
                  <div className="article-name">{this.props.section}</div>
                  <div className="article-number">{this.props.title}</div>
                  <div className="article-content">{this.props.content}</div>
                  <div className="article-content">{this.props.content}</div>
                </div>
                {this.props.video ?
                  <Video videoOpen={this.state.videoOpen} videoSrc={this.props.video}/>
                  :
                  null
                }
              </li>
  }
};

class View extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      clicked:false
    }
  }

  setClicked=(event)=> {
    this.setState({
        clicked:!this.state.clicked
    });
    this.props.updateView(this.state.clicked);
  }

  render() {
    return  this.state.clicked
            ?
              null
            :
            <button onClick={this.setClicked}>View more</button>
  }
};

class ArticlesList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data:ARTICLES,
      filterText: '',
      filterSpeciality: '',
      filterSection: '',
      filterAudience: '',
      viewAll:false
    }
  }

  setFilterText=(event)=> {
    this.setState({
      filterText: event.target.value.toLowerCase()
    });
  }

  setFilterSpeciality=(event)=> {
    this.setState({
      filterSpeciality: event.target.value.toLowerCase()
    });
  }

  setFilterSection=(event)=> {
    this.setState({
      filterSection: event.target.value.toLowerCase()
    });
  }

  setFilterAudience=(event)=> {
    this.setState({
      filterAudience: event.target.value.toLowerCase()
    });
  }

  setViewAll=()=> {
    this.setState({
      viewAll:!this.state.viewAll
    });
  }

  filterUsers=()=> {
    let articles = this.state.data;

    if(this.state.filterText.length){
      articles = articles.filter((article)=>{
        var handleSearch=this.state.filterText;
        return (article.title.toLowerCase().indexOf(handleSearch)!==-1
                ||
                article.content.toLowerCase().indexOf(handleSearch)!==-1);
      });
    }
    if (this.state.filterSpeciality!=="all specialities") {
      articles =articles.filter((article)=>{
        var handleSearch=this.state.filterSpeciality;
        return (article.speciality.toLowerCase().indexOf(handleSearch)!==-1);
      });
    }
    if (this.state.filterSection!=="all sections") {
      articles =articles.filter((article)=>{
        var handleSearch=this.state.filterSection;
        return (article.section.toLowerCase().indexOf(handleSearch)!==-1);
      });
    }
    if (this.state.filterAudience!=="all audiences") {
      articles =articles.filter((article)=>{
        var handleSearch=this.state.filterAudience;
        return (article.audience.toLowerCase().indexOf(handleSearch)!==-1);
      });
    }
    return articles;
  };

  render() {
    let articles = this.state.viewAll
                ?
                this.filterUsers()
                :
                this.filterUsers().slice(0, 3);

    return  <div>
              <div className="filter">
                <div className="container">
                  <div className="container-filter">
                    <p className="filter-name">Search the Academy by keyword:</p>
                    <input  type="text" className="filter-text" placeholder="Enter keyword" onChange={this.setFilterText} />
                  </div>
                  <div className="container-filter">
                    <p className="filter-name">Filter content by:</p>
                    <Filter filterName={this.setFilterSpeciality} filterData={FILTER1}/>
                    <Filter filterName={this.setFilterSection}    filterData={FILTER2}/>
                    <Filter filterName={this.setFilterAudience}   filterData={FILTER3}/>
                  </div>
                </div>
              </div>
              <div className="container">
                <p className="title-articles">Study materials</p>
                <ul className="articles-list">
                  {
                    articles.map(function(el,i){
                      return   <Article key={i}
                                  image={el.image}
                                  section={el.section}
                                  title={el.title}
                                  content={el.content}
                                  video={el.video}
                                />;
                    })
                  }
                </ul>
                <View updateView={this.setViewAll} />
              </div>
            </div>;
  }
};

ReactDOM.render(
  <div>
    <ArticlesList/>
  </div>,
  document.getElementById("root")
);
