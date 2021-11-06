//CURRENT LIST OF WORDS FOR THE WEEK:
// let currentWords = ['shelf', 'bandit', 'she', 'sprang', 'munch', 'picnic', 'think', 'wish', 'drift', 'box'];
// console.log(currentWords);

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

let numberOfInputs = 0;
function addWordInput(){

   let newLabel = document.createElement('label');
   newLabel.setAttribute('for', 'add-word');  
   newLabel.classList.add('word-input'); 
   currentLabel = document.getElementsByClassName('word-input');
   let wordForm = document.getElementById('add-words-form');
   let savebtn = document.getElementById('word-from-submit-btn');
   //let newinput = `<label for="add-word" class="word-input">add <input type="text" name="" id="" value=""> <button type="button" id="delete-input" onclick="deleteInput()">X</button></label>`;
   let newinput = `add <input type="text" name="new-spelling-word" class="new-word" value=""> <button type="button" class="delete-input" onclick="deleteInput()" >X</button>`;
   
   newLabel.innerHTML = newinput;
   //newLabel.appendChild(newinput);
   // current code
   wordForm.insertBefore(newLabel, wordForm.lastElementChild.previousSibling);
   //wordForm.appendChild(newLabel);
   return false;
   //parentForm.innerHTML += newinput;
   
}

function deleteInput() {
   var ele = document.getElementsByClassName("delete-input");
   for (var i = 0; i < ele.length; i++) {
       ele[i].addEventListener('click', function (e) {
           //e.preventDefault();
           e.target.parentNode.closest('label').remove();
       });
   }
}
deleteInput();


//CURRENT LIST OF WORDS FOR THE WEEK:
let currentWords = new Array ('shelf', 'bandit', 'she', 'sprang', 'munch', 'picnic', 'think', 'wish', 'drift', 'box');
console.log(currentWords);
////////////// Working Some
function addNewWords() {
   let template = currentWords.map(newword => `<li>${newword}</li>`).join('\n');
   document.getElementById('word-list-top').innerHTML = template;
}

addNewWords();

let btnAdd = document.getElementById('word-from-submit-btn');
let wordinput = document.getElementsByClassName('new-word');

btnAdd.addEventListener('click', () =>{
   //for(var i = 0; i < wordinput.length; i++)

   currentwords = [].map.call(wordinput, function( input ) {
               return input.value;
            });
            console.log(wordinput);
            // ==> was above after     }).join( ' | ' );

            let combinedArray = currentWords.concat(currentwords);
            alert('Following words have been added to your spelling list: ' + combinedArray);
            console.log(combinedArray);
            document.getElementById('add-words-form').reset();
            let template = combinedArray.map(newword => `<li>${newword}</li>`).join('\n');
            document.getElementById('word-list-top').innerHTML = template;
            closeForm();
            
});

//////////////////////////


// function addNewWords() {
//    let template = currentWords.map(newword => `<li>${newword}</li>`).join('\n');
//    document.getElementById('word-list-top').innerHTML = template;
// }

// addNewWords();

// let btnAdd = document.getElementById('word-from-submit-btn');
// let wordinput = document.getElementsByClassName('new-word');

// btnAdd.addEventListener('click', () =>{
//    currentwords = [].map.call(wordinput, function( input ) {
//          return input.value;
//       });
//       // ==> was above after     }).join( ' | ' );
//       console.log(currentwords);
//       //currentWords.push(currentwords);
//       let combinedArray = currentWords.concat(currentwords);
//       let currentWords = combinedArray;
//       //currentWords.push(currentwords);
//       alert(combinedArray);
//       console.log(combinedArray);
//       document.getElementById('add-words-form').reset();
//       //wordinput.value = '';
//       addNewWords();
// });
// console.log('Check List ' + currentWords);




      
//    document.getElementById('add-words-form').reset();
//    console.log(currentWords);
// }

// function addNewWords() {
//    const addWords = (ev)=> {
//       ev.preventDefault();
//       let newWord = {
//          id: Date.now(),
//          spellingWord: document.getElementsByClassName('new-word').value,
//          //for (let i = 0; i < spellingWord.length; i++)
//       }
//       currentWords.push(newWord);
//       document.getElementById('add-words-form').reset();
//       console.log(newWord);
//       console.log(currentWords);
//    }
// };


/* <script>
        let movies = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addMovie = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let movie = {
                id: Date.now(),
                title: document.getElementById('title').value,
                year: document.getElementById('yr').value
            }
            movies.push(movie);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {movies} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

            //saving to localStorage
            localStorage.setItem('MyMovieList', JSON.stringify(movies) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addMovie);
        });
    </script> */

// let x= 0;
// function addNewWords() {
//    currentWords[x] = document.getElementsByClassName('new-word').value;
//    alert(`Words: ${currentWords[x]} Added to list ${x}`);
//    x++;
//    document.getElementById('add-words-form').reset();
//    console.log(currentWords);
// }

///// WORKING
// function addNewWords() {
//    let inputs = document.getElementsByClassName( 'new-word' ),
//     currentwords = [].map.call(inputs, function( input ) {
//         return input.value;
//     });
//     // ==> was above after     }).join( ' | ' );
//     console.log(currentwords);
//     currentWords.push(currentwords);
// alert('Following words have been added to your spelling list: ' + currentWords);
// console.log(currentWords);
// }
