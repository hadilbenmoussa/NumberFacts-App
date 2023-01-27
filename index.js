let fact =document.getElementById('fact');
let factText=document.getElementById('factText');
let numberInput=document.getElementById('numberInput');
numberInput.addEventListener('input',getFactfetch);

//external api using ajax
// function getFactAjax(){
    
//     let number = numberInput.value;
//     if (number !=0){
//     //create xhr request 

//     let xhr=new XMLHttpRequest();
//     xhr.open('GET','http://numbersapi.com/'+number,true);
//     xhr.onload=function (){
//         if(this.status==200){
//             factText.innerHTML=this.responseText;
//             fact.style.display='block';


//          }}
//     xhr.send();
// }}
//external api using fetch api
function getFactfetch(){
    let number = numberInput.value;
 
    if (number!=0){
        fetch(`http://numbersapi.com/${number}`).then((res)=>res.text()).then((data)=>{
             factText.innerHTML=data;
             fact.style.display='block';
         
        })






    }
}