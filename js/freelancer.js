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
  $("#saveInSetting").click(function()
  {
      alert("here");
      var inputUser = (form.user.value);
      var inputPassword = (form.password.value);
      var inputEmail = (form.email.value);
      var inputName = (form.name.value);

      if (inputUser)
      {
          localStorage.setItem('username', JSON.stringify(inputUser));

      }

      if (inputName)
      {
          localStorage.setItem('name', JSON.stringify(inputName));

          nameChange();

      }

      if(inputPassword)
      {
          localStorage.setItem('password', JSON.stringify(inputPassword));

      }

      if(inputEmail)
      {
        localStorage.setItem('email', JSON.stringify(inputEmail));


      }
      window.location  = "index.html";
   })


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
        //creates localStorage piece called 'new_activity_name' from 'name'
        var name = document.getElementById("new_activity_name");
        localStorage.setItem("new_activity_name", name.value);

        var why = document.getElementById("new_activity_why");
        localStorage.setItem("new_activity_why", why.value);

        var day = document.getElementById("day");
        localStorage.setItem("new_activity_day", day.value);

        var time = document.getElementById("time");
        localStorage.setItem("new_activity_time", time.value);

        var noon = document.getElementById("noon");
        localStorage.setItem("new_activity_noon", noon.value);

        var new_activity = {
          activity_name: localStorage.getItem('new_activity_name'),
          activity_why: localStorage.getItem('new_activity_why'),
          activity_day: localStorage.getItem('new_activity_day'),
          activity_time: localStorage.getItem('new_activity_time'),
          activity_noon: localStorage.getItem('new_activity_noon')
        }




        var activity_list = JSON.parse(localStorage.getItem('list')) || [];
        // add to it,
        activity_list.push({
          activity_name: localStorage.getItem('new_activity_name'),
          activity_why: localStorage.getItem('new_activity_why'),
          activity_day: localStorage.getItem('new_activity_day'),
          activity_time: localStorage.getItem('new_activity_time'),
          activity_noon: localStorage.getItem('new_activity_noon')
        });
        console.log(activity_list);
        // then put it back.
        localStorage.setItem('list', JSON.stringify(activity_list));



        // // compile the template
        // var source  = $("#entry-template").html();
        // var template = Handlebars.compile(source);
        // var parentDiv = $("#templatedProjects");


        // // start with a simple template
        // var html = template(new_activity);
        // // console.log(html);






        //COMMENTED GTHIS OUT BC I JUST REFRESH THE PAGE AFTER CLOSING THE Add_Activity
        // parentDiv.append(html);
      }







      $(document).ready(function(){

        list = JSON.parse(localStorage.getItem('list'));

        var source  = $("#entry-template").html();
        var template = Handlebars.compile(source);
        var parentDiv = $("#savedProjects");

        // console.log(JSON.parse(localStorage.getItem('list')).length);
        console.log(list);
        for (var i=0; i < list.length; i++) {
          // TODO: check if there's another variable called data that can conflict
          var data = JSON.parse(localStorage.getItem('list'))[i];
          data.index = i;
          console.log(data);
          // console.log(data.activity_name);
          var html = template(data);

          // console.log(JSON.parse(localStorage.getItem('list'))[i]);
          parentDiv.append(html);
          //THEN, GET THIS TO REFRESH THE PAGEEEEEEE
        }
      })






  function remove(element) {
    element.remove();





    // you would also need to remove it from the actual list in localStorage




          //THEN, GET THIS TO REFRESH THE PAGEEEEEEE
        }






    // document.getElementById("signup_button").onclick=createUser;

    //After clicking on id='#save_button', creates and runs function createNew
    function createUser(){
        //alert("inside createUser");


        var username = (document.getElementById("userSignup").value);
        var password = (document.getElementById("passwordSignup").value);
        var email = (document.getElementById("emailSignup").value);
        var name = (document.getElementById("nameSignup").value);

        if ((username && password && email && name )) {
            //alert(name);
            //var name = document.getElementById("name");
            localStorage.setItem("name", name);

            //var email = document.getElementById("email");
            localStorage.setItem("email", email);

            //var user = document.getElementById("username");
            localStorage.setItem("username", username);

            //var password = document.getElementById("password");
            localStorage.setItem("password", password);

            var new_user = {
                first_name: localStorage.getItem('name'),
                email: localStorage.getItem('email'),
                user: localStorage.getItem('username'),
                password: localStorage.getItem('password')
            }

            window.location  = "index.html";

    }else {
        alert("Please Fill All Required Field");
    }



        //combines 'name' and 'why' into new object with properties 'activity_name' & 'activity_why'
        //to properly add to handlbars template (below)

    }

    // function check_filled() { /*function to check all inputs are filled*/
    //     var username = (form.user.value);
    //     var password = (form.password.value);
    //     var email = (form.email.value);
    //     var name = (form.name.value);
    //
    //     if ((username && password && email && name )) {
    //         localStorage.setItem('name', JSON.stringify(name));
    //         localStorage.setItem('username', JSON.stringify(username));
    //         localStorage.setItem('password', JSON.stringify(password));
    //         localStorage.setItem('email', JSON.stringify(email));
    //         window.location  = "index.html";/*opens the target page */
    //     }
    //     else {
    //         alert("Please Fill All Required Field");/*displays error message*/
    //     }
    //
    // }

    function myFunction(){
        // alert("Page is loaded");
        // alert (JSON.parse(typeof localStorage.getItem('list'))[0].activity_name);
        var d = new Date();

        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var n = weekday[d.getDay()];
        var hour = d.getHours();
        var list = JSON.parse(localStorage.getItem('list'));
        for (var i = 0; i < list.length; i++)
        {
            var activity = JSON.parse(localStorage.getItem('list'))[i];
            console.log(activity.activity_day);
            console.log(activity.activity_time);
            console.log(activity.activity_noon);
            if (activity.activity_day == n)
            {
                if (activity.activity_noon == "am")
                {
                    if (activity.activity_time<=hour)
                    {
                        //alert("Remember to do: "+ activity.activity_name);

                        document.getElementById("notification_messages").innerHTML = "Reminder to do: "+ activity.activity_name +" today!";
                    }else if (activity.activity_time<=hour%12) {
                        //alert("Remember to do: "+ activity.activity_name);
                        document.getElementById("notification_messages").innerHTML = "Reminder to do: "+ activity.activity_name +" today!";
                    }

                }
            }
        }
    }
