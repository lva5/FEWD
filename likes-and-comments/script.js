var like = document.querySelector(".like-link");

//fnc to up the like count
function liked(event) {
  event.preventDefault();
  var count = document.querySelector(".like-count");
  n = parseInt(count.textContent) + 1;
  count.textContent = n;
}

like.addEventListener("click", liked);

var submit = document.querySelector("button");
var commentlist = document.querySelector("#comments");
submit.addEventListener("click", comment);

//function that adds comment to page
function comment(event) {
  event.preventDefault();
  var text = document.querySelector("#new-comment-body").value;
  var newcomment = document.createElement("div");
  newcomment.classList.add("comment");
  newcomment.textContent = text;
  commentlist.appendChild(newcomment);
  document.querySelector("#new-comment-body").value = "";
}
