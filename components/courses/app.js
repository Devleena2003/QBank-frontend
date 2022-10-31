const data=[
    {
       title: "Paper name" ,
       des: "This is paper description"
    },
    {
        title: "Paper name" ,
        des: "This is paper description"
     },
     {
        title: "Paper name" ,
        des: "This is paper description"
     },
     {
        title: "Paper name" ,
        des: "This is paper description"
     },
     {
        title: "Paper name" ,
        des: "This is paper description"
     },
     {
        title: "Paper name" ,
        des: "This is paper description"
     }
]

data.forEach((Element,i)=>{


const main= document.querySelector('.main');
console.log(main);
const card= document.createElement('div');
card.classList='card';
const courseCard = `
<img src="../assets/Banner-Blog-1A-1.jpg" alt="" />
<div class="info">
  <h3>${data[i].title}</h3>
  <p>
    ${data[i].des}
  </p>
  <button class="btn"><a href="#"> Download </a></button>
</div>
`
card.innerHTML+=courseCard;
main.appendChild(card);
})