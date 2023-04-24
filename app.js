const testomonialImage=document.getElementById('testomonialImage');
const testomonialName=document.getElementById('testomonialName');
const testomonialText=document.getElementById('testomonialText');


const testomonial=[
    {
        name:" Tanya Sinclair",
        title:" UX Engineer",
        image:"./images/image-tanya.jpg",
        testomonial: " I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ",


    },
    {
        name:"John Tarkpor",
        title:"Junior Front-end Developer",
        image:"./images/image-john.jpg",
        testomonial:"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",

    }
]

function handleTestominial(){
    testomonialImage.src=testomonial[currentIndex].image;
    testomonialName.innerHTML=`${testomonial[currentIndex].name}
    <span>
    ${testomonial[currentIndex].title}
    </span>
    `;
    testomonialText.innerHTML=testomonial[currentIndex].testomonial;
    
}
let currentIndex=0;
 function handleNextAndPrevious(action){

if(action=="next"){
    if(currentIndex<testomonial.length){
        currentIndex++;
    }
}
else{
    if(currentIndex>0){
        currentIndex--;
    }
}
handleTestominial();
}
handleTestominial();

document.onkeydown=(e)=>{
    switch(e.keyCode){
        case 37:
            handleNextAndPrevious('prev');
        break;
        case 39:
            handleNextAndPrevious('next');
    }
}