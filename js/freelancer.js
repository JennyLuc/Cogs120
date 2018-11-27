(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

   function nameChange()
   {
       var changedName = localStorage.getItem('name');
       document.getElementById("myName").innerHTML = localStorage.getItem("name") + "'s Activities";
   }
  $("#saveInSetting").click(function()
  {
      alert ("hello");
      var username = (document.getElementById('userSetting').value);
      var password = (document.getElementById('passwordSetting').value);
      var email = (document.getElementById('emailSetting').value);
      var name = (document.getElementById('nameSetting').value);

      if (username && password && email && name)
      {
          localStorage.setItem('username', JSON.stringify(name));
          localStorage.setItem('username', JSON.stringify(username));
          localStorage.setItem('password', JSON.stringify(password));
          localStorage.setItem('password', JSON.stringify(email));
      }else
      {
          alert("Please complete input in all fields");
      }


  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  $('.portfolio-item').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.portfolio-modal-dismiss', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict











$('#save_button').click(createNew);
//After clicking on id='#save_button', creates and runs function createNew
function createNew(){

    //creates variable 'name' from 'new_activity_name'(id of the an input)
    var name = document.getElementById("new_activity_name");
    //creates localStorage piece called 'new_activity_name' from 'name'
    localStorage.setItem("new_activity_name", name.value);
    //same^
    var why = document.getElementById("new_activity_why");
    localStorage.setItem("new_activity_why", why.value);



    //combines 'name' and 'why' into new object with properties 'activity_name' & 'activity_why'
    //to properly add to handlbars template (below)
    var new_activity = {
    activity_name: localStorage.getItem('new_activity_name'),
    activity_why: localStorage.getItem('new_activity_why')
  }

    // compile the template
    var source  = $("#entry-template").html();
    var popUp  = $("#popup-information").html();
    var template = Handlebars.compile(source);
    var template2 = Handlebars.compile(popUp);
    var parentDiv = $("#templatedProjects");


    // start with a simple template
    var html = template(new_activity);
    console.log(html);
    parentDiv.append(html);

}

$('#add-activity-nav').click(createNew);
//After clicking on id='#save_button', creates and runs function createNew
function createNew(){

    //creates variable 'name' from 'new_activity_name'(id of the an input)
    var name = document.getElementById("new_activity_name");
    //creates localStorage piece called 'new_activity_name' from 'name'
    localStorage.setItem("new_activity_name", name.value);
    //same^
    var why = document.getElementById("new_activity_why");
    localStorage.setItem("new_activity_why", why.value);



    //combines 'name' and 'why' into new object with properties 'activity_name' & 'activity_why'
    //to properly add to handlbars template (below)
    var new_activity = {
    activity_name: localStorage.getItem('new_activity_name'),
    activity_why: localStorage.getItem('new_activity_why')
  }

    // compile the template
    var source  = $("#entry-template").html();
    var popUp  = $("#popup-information").html();
    var template = Handlebars.compile(source);
    var template2 = Handlebars.compile(popUp);
    var parentDiv = $("#templatedProjects");


    // start with a simple template
    var html = template(new_activity);
    console.log(html);
    parentDiv.append(html);

}
