// 1. Creo un array contente le informazioni da stampare in pagina.

// 2. Ciclo le informazioni per poterle leggere.

// 3. Stampo le informazioni in console.log().

// 4. Stampo le informazioni in pagina.

const ourTeam = [
  {
    name: 'Wayne Barnett',
    job: 'Founder & CEO',
    photo: '/img/wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    job: 'Chief Editor',
    photo: '/img/angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    job: 'Office Manager',
    photo: '/img/walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    job: 'Social Media Manager',
    photo: '/img/angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    job: 'Developer',
    photo: '/img/scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    job: 'Graphic Designer',
    photo: '/img/barbara-ramos-graphic-designer.jpg'
  },
];



for(let member of ourTeam) {
  console.log(member);
  console.log(member.name)
  console.log(member.job)
  console.log(member.photo)
}

const ul = document.querySelector('ul');

// `<li>${pizza.nome} € ${pizza.prezzo}
//   <br>
//   ingredienti: ${pizza.ingredienti.join(" - ")}
//   </li>`