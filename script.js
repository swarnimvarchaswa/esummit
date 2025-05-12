function calculateInitialValue() {
  var height = window.innerHeight;
  var width = window.innerWidth;
  var arctangentResult = Math.atan2(height, width);
  var degrees = arctangentResult * (180 / Math.PI);
  degrees = ((degrees + 360) % 360) + 90;

  //   console.log("Calculated Initial Value:", degrees + "deg");

  document.documentElement.style.setProperty("--startAngle", degrees + "deg");

  return degrees + "deg";
}

// Call the function to set initial values
calculateInitialValue();

document.addEventListener("DOMContentLoaded", function () {
  var effectElement = document.getElementById("effect");
  var initialTouchX = null;
  var isAnimating = false;

  // menu
  const homeLink = document.getElementById("homeLink");
  const aboutLink = document.getElementById("aboutLink");
  const workshopLink = document.getElementById("workshopLink");
  const eventsLink = document.getElementById("eventsLink");
  const speakersLink = document.getElementById("speakersLink");
  const sponsorsLink = document.getElementById("sponsorsLink");
  const contactLink = document.getElementById("contactLink");

  const arrow = document.getElementById("arrow");

  // menu mobile
  const menuLink = document.querySelectorAll("#mobileMenu a");
  // menu

  // for scrolling
  var mainPage = document.getElementById("mainPage");
  var about = document.getElementById("about");
  var workshop = document.getElementById("workshop");
  var events = document.getElementById("events");
  var speakers = document.getElementById("speakers");
  var sponsors = document.getElementById("sponsors");
  var contact = document.getElementById("contact");
  // for buttons
  var rightClick = document.getElementById("rightClick");
  var leftClick = document.getElementById("leftClick");

  // mobile menu
  var cross = document.getElementById("cross");
  var mobileMenu = document.getElementById("mobileMenu");
  var menuButton = document.getElementById("menuButton");

  cross.addEventListener("click", function () {
    mobileMenu.classList.add("invisible");
  });

  // menu button click
  menuLink.forEach(function(item) {
    item.addEventListener("click", function(){
      mobileMenu.classList.add("invisible");
    })
  })

  menuButton.addEventListener("click", function () {
    mobileMenu.classList.remove("invisible");
  });

  rightClick.addEventListener("click", function () {
    if (!isAnimating) {
      backward();
      setTimeout(function () {
        forwardPageScroll();
      }, 1500);
    }
  });

  leftClick.addEventListener("click", function () {
    if (!isAnimating) {
      forward();
      setTimeout(function () {
        backwardPageScroll();
      }, 1500);
    }
  });

  // menu click
  homeLink.addEventListener("click", function () {
    hideAllPages();
    mainPage.classList.remove("hidden");
    mainPage.classList.add("block");
    forward();
  });

  aboutLink.addEventListener("click", function () {
    hideAllPages();
    about.classList.remove("hidden");
    about.classList.add("block");
    forward();
  });

  workshopLink.addEventListener("click", function () {
    hideAllPages();
    workshop.classList.remove("hidden");
    workshop.classList.add("block");
    forward();
  });

  eventsLink.addEventListener("click", function () {
    hideAllPages();
    events.classList.remove("hidden");
    events.classList.add("block");
    forward();
  });

  speakersLink.addEventListener("click", function () {
    hideAllPages();
    speakers.classList.remove("hidden");
    speakers.classList.add("block");
    forward();
  });

  sponsorsLink.addEventListener("click", function () {
    hideAllPages();
    sponsors.classList.remove("hidden");
    sponsors.classList.add("block");
    forward();
  });

  contactLink.addEventListener("click", function () {
    hideAllPages();
    contact.classList.remove("hidden");
    contact.classList.add("block");
    forward();
  });

  // for mobile menu

  function hideAllPages() {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => page.classList.add("hidden"));
    pages.forEach((page) => page.classList.remove("block"));
  }

  // for arrow

  arrow.addEventListener("click", function () {
    hideAllPages();
    about.classList.remove("hidden");
    about.classList.add("block");
    forward();
  });


  // for second page
  function forwardPageScroll() {
    if (mainPage.classList.contains("block")) {
      mainPage.classList.add("hidden");
      mainPage.classList.remove("block");
      about.classList.add("block");
      about.classList.remove("hidden");
    }

    // for third page
    else if (about.classList.contains("block")) {
      about.classList.add("hidden");
      about.classList.remove("block");
      workshop.classList.add("block");
      workshop.classList.remove("hidden");
    }
    // for forth page
    else if (workshop.classList.contains("block")) {
      workshop.classList.add("hidden");
      workshop.classList.remove("block");
      events.classList.add("block");
      events.classList.remove("hidden");
    }

    //for speakers
    // else if (events.classList.contains("block")) {
    //   events.classList.add("hidden");
    //   events.classList.remove("block");
    //   speakers.classList.add("block");
    //   speakers.classList.remove("hidden");
    // }
    else if (events.classList.contains("block")) {
      events.classList.add("hidden");
      events.classList.remove("block");
      contact.classList.add("block");
      contact.classList.remove("hidden");
    }

    // for sponsors
    else if (speakers.classList.contains("block")) {
      speakers.classList.add("hidden");
      speakers.classList.remove("block");
      sponsors.classList.add("block");
      sponsors.classList.remove("hidden");
    }

    // for contact
    else if (sponsors.classList.contains("block")) {
      sponsors.classList.add("hidden");
      sponsors.classList.remove("block");
      contact.classList.add("block");
      contact.classList.remove("hidden");
    }
  }

  function backwardPageScroll() {
    if (about.classList.contains("block")) {
      about.classList.add("hidden");
      about.classList.remove("block");
      mainPage.classList.add("block");
      mainPage.classList.remove("hidden");
    }

    //from workshop page
    else if (workshop.classList.contains("block")) {
      workshop.classList.add("hidden");
      workshop.classList.remove("block");
      about.classList.add("block");
      about.classList.remove("hidden");
    }

    // from event page
    else if (events.classList.contains("block")) {
      events.classList.add("hidden");
      events.classList.remove("block");
      workshop.classList.add("block");
      workshop.classList.remove("hidden");
    }

    //from speaker
    else if (speakers.classList.contains("block")) {
      speakers.classList.add("hidden");
      speakers.classList.remove("block");
      events.classList.add("block");
      events.classList.remove("hidden");
    }

    //for sponsors
    else if (sponsors.classList.contains("block")) {
      sponsors.classList.add("hidden");
      sponsors.classList.remove("block");
      speakers.classList.add("block");
      speakers.classList.remove("hidden");
    }

    //for contact
    // else if (contact.classList.contains("block")) {
    //   contact.classList.add("hidden");
    //   contact.classList.remove("block");
    //   sponsors.classList.add("block");
    //   sponsors.classList.remove("hidden");
    // }
    else if (contact.classList.contains("block")) {
      contact.classList.add("hidden");
      contact.classList.remove("block");
      events.classList.add("block");
      events.classList.remove("hidden");
    }
  }

  function forward() {
    effectElement.classList.add("animationForwardMobile");
    isAnimating = true;

    setTimeout(function () {
      effectElement.classList.remove("animationForwardMobile");
      isAnimating = false;
    }, 1500);
  }

  function backward() {
    effectElement.classList.add("animationBackwardMobile");
    isAnimating = true;

    setTimeout(function () {
      effectElement.classList.remove("animationBackwardMobile");
      isAnimating = false;
    }, 1500);
  }

  function forwardScroll() {
    effectElement.classList.add("animationForward");
    isAnimating = true;

    setTimeout(function () {
      backwardPageScroll();
    }, 1500);

    setTimeout(function () {
      effectElement.classList.remove("animationForward");
      isAnimating = false;
    }, 2500);
  }

  function backwardScroll() {
    effectElement.classList.add("animationBackward");
    isAnimating = true;

    setTimeout(function () {
      forwardPageScroll();
    }, 1500);

    setTimeout(function () {
      effectElement.classList.remove("animationBackward");
      isAnimating = false;
    }, 2500);
  }

  window.addEventListener("wheel", function (event) {
    var scrollDirection = event.deltaY;
    console.log(scrollDirection);
    handleScrollDirection(scrollDirection);
  });

  //touch in mobile
  window.addEventListener("touchstart", function (event) {
    initialTouchX = event.touches[0].clientX;
  });

  window.addEventListener("touchend", function (event) {
    if (initialTouchX !== null) {
      var currentTouchX = event.changedTouches[0].clientX;
      var scrollDirection = currentTouchX - initialTouchX;
      handleScrollDirection(scrollDirection);
      initialTouchX = null;
    }
  });

  function handleScrollDirection(scrollDirection) {
    if (!isAnimating) {
      if (scrollDirection > 0) {
        console.log("Scrolling down");
        backwardScroll();
      } else if (scrollDirection < 0) {
        console.log("Scrolling up");
        forwardScroll();
      }

      isAnimating = true;

      setTimeout(function () {
        isAnimating = false;
      }, 2500);
    }
  }
});
