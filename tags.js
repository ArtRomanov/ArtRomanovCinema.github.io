var xhr = new XMLHttpRequest();
var url1 = 'https://run.mocky.io/v3/2197fd83-cb6e-4098-b4fe-124ae7f60414';

xhr.open('get', url1,true);
xhr.onload=()=>{
  let jsonData = JSON.parse(xhr.responseText);
  showTags(jsonData);
}
xhr.send();

function showTags(data) {
  let tagsUl = document.createElement('ul');

//let starIcon = document.createElement('i');
//starIcon.classList.add('fa', 'fa-star-o');
//starIcon.classList.add('fa-star-o');
// starIcon.setAttribute('aria-hidden=true');

  for (let i in data) {
	  let li = document.createElement('li');
	  
	  li.innerText = data[i];
	  //li.innerHTML = data [i] + '<i class="fa fa-star-o" aria-hidden="true"></i>';

	  
	  tagsUl.appendChild(li);
  }

  let tagsBlock = document.getElementById("tags");
  if (tagsBlock) {
	tagsBlock.appendChild(tagsUl);
  }
}

