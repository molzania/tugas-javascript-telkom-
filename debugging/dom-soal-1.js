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

document.getElementsByClassName("card-text");

//  const card1 = document.querySelector("#card-01");
//  const card2 = document.querySelector("#card-02");
//  const card3 = document.querySelector("#card-03");
//  const card4 = document.querySelector("#card-04");

//Soal nomor 4
const clickhandler=function(e){
  let modal=document.querySelector('.modal');
      modal.querySelector('img').src=this.querySelector('img').src;
      modal.querySelector('#modal-text').innerHTML=this.querySelector('#card-text').innerHTML;
      modal.querySelector('#modal-title').innerHTML=this.querySelector('#card-title').innerHTML;
      
  
  modal.classList.add('open');
  modal.querySelector('button.btn-close').addEventListener('click',function(e){
      modal.classList.remove('open')
  });
};

document.querySelectorAll('.card').forEach( div=>div.addEventListener('click',clickhandler));

