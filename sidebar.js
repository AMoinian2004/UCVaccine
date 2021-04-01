$(document).ready(function(){
	$("#popUp").modal('show');
});

var sidebar = document.getElementById("sidebar");
var overlayBg = document.getElementById("myOverlay");

function open_Sidebar() {
  document.getElementById("sidebar").style.display = "block";
}

function close_Sidebar() {
  document.getElementById("sidebar").style.display = "none";
}