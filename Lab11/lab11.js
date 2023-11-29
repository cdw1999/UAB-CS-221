'use strict;'

let loginForm = document.getElementById("bookQuerry");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let book = document.getElementById("bTitle");
  let author = document.getElementById("aTitle")
  let url = "https://www.googleapis.com/books/v1/volumes?q="
  let querry = ''

  if (book.value == "" && author.value == "") {
    alert("Please input a value in either field!")
    return;
  }
  if (book.value != "") {
    querry = url + book.value.replace(/ /g, "+");

  }
  if (author.value != "") {
    querry = querry + 'inauthor:' + author.value.replace(/ /g, "+");
  }
  querry = querry + '&key=AIzaSyC5PIGjeidy_LQupt1-oXQNs_YOjxlty2A'
  console.log(querry);
  fetchBook(querry);
});

function fetchBook(querry) {
  fetch(querry, {
    method: 'GET'
    //   headers: {
    //     Accept: 'application/json'
    //   }
    // }
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log(response);
    //     displayJoke(response.joke);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching book', error);
    //     displayJoke('Failed to load book');
  });
}

function displayBook(book) {
  document.getElementById('items').textContent = books;
}

