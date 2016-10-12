var movies = $(".moviepic");
for (var i = 0; i < movies.length; i++) {
  movies[i].addEventListener("click", showInfo)
};

function showInfo(event) {
  event.preventDefault();
  var movieid = event.target.getAttribute("id");
  $.get("http://omdbapi.com/?i="+movieid, displayResults);
};

function displayResults(results) {
  var title = results.Title;
  var year = results.Year;
  var rated = results.imdbRating;
  var runtime = results.Runtime;
  var plot = results.Plot;
  $("#title").text(title);
  $("#year").text(year);
  $("#rated").text(rated);
  $("#runtime").text(runtime);
  $("#plot").text(plot);
};
