console.log(`I'm connected to the file. Ready to go`)

const massage = document.querySelector('#massage');





function addMovie(event){

 event.preventDefault()

 const inputField = document.querySelector('input');

 const movie = document.createElement('li'); //parent movie's title
 const movieTitle = document.createElement('span');
 movieTitle.textContent = inputField.value;// what user typed out into out span
 addEventListener('click',crossofMovie)
 movie.appendChild(movieTitle)

 const deleteBtn = document.createElement('button')
 deleteBtn.textContent = 'x';
 deleteBtn.addEventListener('click', deleteMovie)
 movie.appendChild(deleteBtn)

 document.querySelector('ul').appendChild(movie)
 inputField.value = '';



}




document.querySelector('form').addEventListener('submit', addMovie)


function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted'
   

}



function crossofMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')){
        message.textContent = 'Movie watched!'
    } else {
        message.textContent = 'Movie added back'
    }
    

}

function revealMessage(){
    setTimeout(() => {
        massage.querySelector('hide'), '1000'
    })
}
    










