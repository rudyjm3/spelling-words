//CURRENT LIST OF WORDS FOR THE WEEK:
let currentWords = ['shelf', 'bandit', 'she', 'sprang', 'munch', 'picnic', 'think', 'wish', 'drift', 'box'];
console.log(currentWords);

//let closeFormBtn = document.getElementById('close-form-btn');
let addForm = document.getElementsByClassName('add-words-form-container')[0];
let addwordform = document.getElementById('add-words-from');

function closeForm(){
   document.getElementById('add-words-form').reset();
   if(addForm.classList.contains('toggle-open')){
      addForm.classList.remove('toggle-open')
      addForm.classList.add('toggle-close')
      addForm.style.display ="none;"
   }
}

function openForm(){
   addForm.style.display = "block";
   if (addForm.classList.contains('toggle-close')) {
   
      addForm.classList.remove('toggle-close')
      addForm.classList.add('toggle-open')
   }
}

let numberOfInputs = 1;
function addWordInput(){
   let newLabel = document.createElement('label');
   newLabel.setAttribute('for', 'add-word');  
   newLabel.classList.add('word-input'); 
   let wordForm = document.getElementById('add-words-form');
   //let newinput = `<label for="add-word" class="word-input">add <input type="text" name="" id="" value=""> <button type="button" id="delete-input" onclick="deleteInput()">X</button></label>`;
   let newinput = `add <input type="text" name="" id="" value=""> <button type="button" class="delete-input">X</button>`;
   
   newLabel.innerHTML = newinput;
   //newLabel.appendChild(newinput);
   wordForm.appendChild(newLabel);
   return false;
   //parentForm.innerHTML += newinput;
   
}

function deleteInput() {
   var ele = document.getElementsByClassName("delete-input");
   for (var i = 0; i < ele.length; i++) {
       ele[i].addEventListener('click', function (e) {
           //e.preventDefault();
           e.target.closest('label').remove();
       });
   }
}
deleteInput();

// var i=0;
// function expand(){
//   if(i==0){
// document.getElementById("menu").style.transform = "scale(3)";
//    document.getElementById("plus").style.transform = "rotate(45deg)";
//     i=1;
//   }
//   else{
//     document.getElementById("menu").style.transform = "scale(0)";
//     document.getElementById("plus").style.transform = "rotate(0deg)";
//     i=0;
//   }
// }
