// 1. Creo un array contente le informazioni da stampare in pagina.

// 2. Ciclo le informazioni per poterle leggere.

// 3. Stampo le informazioni in console.log().

// 4. Stampo le informazioni in pagina.

// 1.
const ourTeam = [
  {
    name: 'Wayne Barnett',
    job: 'Founder & CEO',
    photo: 'img/wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    job: 'Chief Editor',
    photo: 'img/angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    job: 'Office Manager',
    photo: 'img/walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    job: 'Social Media Manager',
    photo: 'img/angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    job: 'Developer',
    photo: 'img/scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    job: 'Graphic Designer',
    photo: 'img/barbara-ramos-graphic-designer.jpg'
  },
];

// dichiaro variabili
const row = document.querySelector('.row');
const bodyElement = document.body;

bodyElement.classList.add('bg-light')

// 2.
for (let member of ourTeam) {
  // 3.
  console.log(member);
  console.log(member.name)
  console.log(member.job)
  console.log(member.photo)
  
  // creo l'elemento per stampare in pagina
  const card = document.createElement('div');
  card.classList.add('col-4','text-center','my-3')
  card.innerHTML = `
      <img src="${member.photo}" alt="${member.name}'s Photo" class="w-100">
      <div class=" bg-white ">
        <h2>${member.name}</h2>
        <p>${member.job}</p>
      </div>
  `;
  // 4.
  row.appendChild(card);
}

