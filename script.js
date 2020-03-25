var namasaya = document.querySelectorAll('.nama-saya');
function nama() {
  var nama = document.getElementById("nama").value;
  namasaya.forEach(function (jeneng, index) {
    namasaya[index].innerHTML = nama;
  });
  var welcome = document.querySelector('.selamat-datang');
  welcome.innerHTML = 'Selamat datang ' + nama;
  welcome.classList.add("show");
  document.querySelector('.pop-nama').classList.add("show");
  document.querySelector('.gelap').classList.add("show");
}

var menu = document.querySelector('main').children;
menu[0].querySelector('h1').innerHTML = 'TEMPAT WISATA';
menu[1].querySelector('h1').innerHTML = 'BLOG';