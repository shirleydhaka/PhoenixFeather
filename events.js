const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});


$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky")

        }else{
            $('.navbar').removeClass("sticky")

        }
})
});
$(document).ready(function() {
    // Close dropdown when clicking outside
    $(document).click(function(event) {
        var target = $(event.target);
        if (!target.closest('.dropdown').length) {
            $('.dropdown-menu').hide();
        }
    });
});


function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const homeSection = document.querySelector('.home');

  // Toggle class to show/hide menu
  navLinks.classList.toggle('navOpen');
  homeSection.classList.toggle('scroll-right');
}


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// Function to handle tab switching
function openTab(evt, tabName) {
  // Get all elements with class="tabcontent" and hide them
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  let tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}


function readMore(newsId) {
  const newsDetails = {
      1: 'The US Open, one of the four Grand Slam tournaments, is renowned for its electric atmosphere and high-level competition. With players like Novak Djokovic and Iga Swiatek dominating the rankings, 2024 is set to be a year to remember.',
      2: 'Since its inception in 2017, the Laver Cup has grown into one of tennis’s most exciting events. The 2024 edition promises to be another memorable chapter in the rivalry between Team Europe and Team World.',
      3: 'The IPL has been a cornerstone of Twenty20 cricket since 2008. With eight teams, star players from around the world, and millions of fans, the 2024 season is expected to break new records in viewership and entertainment.'
  };
  
  alert(newsDetails[newsId]);
}
