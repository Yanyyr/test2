let is_link_view = false;

function toggleMenu() {
  if(!is_link_view) {
    document.getElementById("icon_view").style.display = "none";
    document.getElementById("links").style.display = "flex";
    is_link_view = true;
  }  
  
  else {
    document.getElementById("icon_view").style.display = "block";
    document.getElementById("links").style.display = "none";
    is_link_view = false;
  }
}