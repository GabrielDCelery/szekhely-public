'use strict';

var navbar = document.querySelector('nav');
var sidenav = document.querySelector('.sidenav');
var showcase = document.querySelector('.main-header .showcase');
var scrollspy = document.querySelectorAll('.scrollspy');
var googlemap = document.querySelector('#googlemap');
var selects = document.querySelectorAll('select');

showcase.classList.add('fade-in');

M.Sidenav.init(sidenav, {
  preventScrolling: true
});

M.ScrollSpy.init(scrollspy, {});
M.FormSelect.init(selects, {});

document.addEventListener('scroll', function (_event) {
  var _bNavBarIsTransparent = window.pageYOffset < 100;

  navbar.classList.toggle('transparent', _bNavBarIsTransparent);
  navbar.classList.toggle('blue-grey', !_bNavBarIsTransparent);
  navbar.classList.toggle('darken-3', !_bNavBarIsTransparent);
});

var position = [42.36, -71.05];
var centerPosition = [42.37, -70.98];

var mapCenterLatLng = {
  lat: 47.544114,
  lng: 19.05
}

var pushPinLatLng = {
  lat: 47.544114,
  lng: 19.043356
}

var map = new google.maps.Map(googlemap, {
  center: mapCenterLatLng,
  zoom: 15,
  streetViewControl: false
});

//'ChIJAeTw4GbZQUcRmhFgq450JLU'

var marker = new google.maps.Marker({
  position: pushPinLatLng,
  map: map,
  title: 'Zeller & Zeller Kft.'
});