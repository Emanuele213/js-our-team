const eleContainer = document.querySelector('.container');
const objArrWorker = [
    {
        name: 'Wayne',
        lastName: 'Barnett',
        employed: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg',
    },

    {
        name: 'Angela',
        lastName: 'Caroll',
        employed: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter',
        lastName: 'Gordonela',
        employed: 'COffice Manager',
        img: 'img/walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela',
        lastName: 'Lopez',
        employed: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott',
        lastName: 'Estradaela',
        employed: 'Developer',
        img: 'img/scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara',
        lastName: 'Ramos',
        employed: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    },
];

console.table(objArrWorker);

for (let i = 0; i < objArrWorker.length; i++) {
    const eleDiv = document.createElement('div');
    eleContainer.append(eleDiv);
    eleDiv.classList.add('mod-worker');
    eleDiv.append(`Worker ${i}: ${objArrWorker[i].name}  ${objArrWorker[i].lastName}  ${objArrWorker[i].employed}  ${objArrWorker[i].img}`);
}