var xhrFilms = new XMLHttpRequest();
var url = 'https://run.mocky.io/v3/77699272-bab4-412c-84d3-5f40e84796b1';

  xhrFilms.open('GET', url,true);

  xhrFilms.onload = () => {
    let jsonData = JSON.parse(xhrFilms.responseText);
    showArtists(jsonData);
  }

  xhrFilms.send();


function showArtists(data) {
	
  let output = "<ul>";
  
  let filmBlock = document.getElementById("list");

  for (let i in data) {

	

	let singleFilmBlock = '<div class="film_row" style="border: 1px solid #ccc;display: flex; padding: 5px; */">' +
			'<div class="film_row__text" style="width: 95%; padding: 5px;">' +
				data[i].title +
			'</div>' +
			'<div class="film_row__star fa fa-star-o" style="padding: 5px;">' +
			'</div>' +
		'</div>';
		
		filmBlock.innerHTML += singleFilmBlock;
  }

  output += "</ul>";
  //


}