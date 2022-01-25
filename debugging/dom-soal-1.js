// Soal nomor 1 
console.log(document);
console.log(document.getElementsByClassName("modal"));
console.log(document.getElementsByClassName("modal-dialog"));
console.log(document.getElementsByClassName("modal-header"));
console.log(document.getElementsByClassName("modal-content"));
console.log(document.getElementsByClassName("modal-title"));
console.log(document.getElementsByClassName("modal-body"));
console.log(document.getElementsByClassName("button"));
console.log(document.getElementsByClassName("modal-text"));
console.log(document.getElementsByClassName("modal-image"));

//Soal nomor 2
console.log(document.querySelector("#card-01"));
console.log(document.querySelector("#card-02"));
console.log(document.querySelector("#card-03"));
console.log(document.querySelector("#card-04"));

// const card1 = document.querySelector("#card-01");
// const card2 = document.querySelector("#card-02");
// const card3 = document.querySelector("#card-03");
// const card4 = document.querySelector("card-04");

const clickhandler=function(e){
    let modal=document.querySelector('.modal-body');
        modal.querySelector('img').src=this.querySelector('img').src;
        modal.querySelector('p[data-id="modal-text"]').innerHTML=this.querySelector('p.card-text').innerHTML;
        modal.classList.toggle('open');
        modal.addEventListener('click',function(e){this.classList.remove('open')})
  };
  
  

//Soal nomor 3

document.querySelectorAll('.card').forEach( div=>div.addEventListener('click',clickhandler));

