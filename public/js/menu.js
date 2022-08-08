var dropdown1 = document.getElementById('d1');
dropdown1.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown1.classList.toggle('is-active');
});

var dropdown2 = document.getElementById('d2');
dropdown2.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdown2.classList.toggle('is-active');
});