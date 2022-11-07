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
        employed: 'Coffice Manager',
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
        img: 'img/barbara-ramos-graphic-designer.jpg',
    },
];

console.table(objArrWorker);

for (let i = 0; i < objArrWorker.length; i++) {
    const eleDiv = document.createElement('div');
    const eleDivName = document.createElement('div');
    const eleImg = document.createElement('div');
    const eleName = document.createElement('div');
    const eleWorker = document.createElement('div');
    const img = document.createElement('img');
    eleContainer.append(eleDiv);
    eleDiv.append(eleImg);
    eleImg.append(img);
    eleDiv.append(eleDivName)
    eleDivName.append(eleName);
    eleDivName.append(eleWorker);
    eleDivName.classList.add('bg-grey');
    eleName.classList.add('mod-name');
    eleWorker.classList.add('mod-worker');
    eleDiv.classList.add('card');
    eleImg.classList.add('card-img')
    img.classList.add('img-size');
    
    eleName.innerHTML = `${objArrWorker[i].name} ${objArrWorker[i].lastName}`;
    eleWorker.innerHTML = `${objArrWorker[i].employed}`;
    // eleDiv.append(`${objArrWorker[i].name}${objArrWorker[i].lastName}`);
    // eleDiv.append(`${objArrWorker[i].employed}`);
    img.setAttribute("src", "img/wayne-barnett-founder-ceo.jpg");
}