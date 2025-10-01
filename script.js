// Diego Alexander Rivera Acosta n01582292 - Pet Project - Morning Routine Timer

// Execute the anonymous function when the web page finish loading
window.onload = function () {
  // Get the form into a var for DOM manupulation
  var formHandle = document.forms.myform;
  // Variables to store hours, minutes and seconds
  var hours, minutes, seconds;
  // Array place in global position to store calculated time values
  var arrayTime = [];

  // Function to validate and calculate total time
  function validate() {

    // Variables to store every single input of type checkbox
    var meditateChecked = document.getElementById("meditate");
    var hydrateChecked = document.getElementById("hydrate");
    var stretchChecked = document.getElementById("stretch");
    var exerciseChecked = document.getElementById("exercise");
    var brushChecked = document.getElementById("brush");
    var skinChecked = document.getElementById("skin");
    var planChecked = document.getElementById("plan");
    var readChecked = document.getElementById("read");
    var dressedChecked = document.getElementById("dressed");
    var emailsChecked = document.getElementById("emails");
    var mediaChecked = document.getElementById("media");
    var bedChecked = document.getElementById("bed");
    var showerChecked = document.getElementById("shower");
    var cookChecked = document.getElementById("cook");
    var eatChecked = document.getElementById("eat");
    var washChecked = document.getElementById("wash");

    // Validation to prevent the user to submit the form if any input checkbox is selected
    if (
      !meditateChecked.checked &&
      !hydrateChecked.checked &&
      !stretchChecked.checked &&
      !exerciseChecked.checked &&
      !brushChecked.checked &&
      !skinChecked.checked &&
      !planChecked.checked &&
      !readChecked.checked &&
      !dressedChecked.checked &&
      !emailsChecked.checked &&
      !mediaChecked.checked &&
      !bedChecked.checked &&
      !showerChecked.checked &&
      !cookChecked.checked &&
      !eatChecked.checked &&
      !washChecked.checked
    ) {
    // If the condition is true (all inputs are not checked) so the error message is displayed
      document.getElementById("nothingSelected").innerHTML =
        '<h3 class="error">*please Select an activity*</h3>';
    // the Function wont return anything until the condition change
      return false;
    }
    // As the if validation condition is not true, the error message is hidden
    document.getElementById("nothingSelected").style.display = "none";

    var timeMeditate = 0;
    var timeHydrate = 0;
    var timeStretch = 0;
    var timeExercise = 0;
    var timeBrush = 0;
    var timeSkin = 0;
    var timePlan = 0;
    var timeRead = 0;
    var timeDressed = 0;
    var timeEmails = 0;
    var timeMedia = 0;
    var timeBed = 0;
    var timeShower = 0;
    var timeCook = 0;
    var timeEat = 0;
    var timeWash = 0;

    // If to validate which inputs where "checked" by the user so it assigns time to them
    if (document.getElementById("meditate").checked) {
      timeMeditate = 300000; // 5 minutes in milliseconds
    }

    if (document.getElementById("hydrate").checked) {
      timeHydrate = 120000; // 2 minutes in milliseconds
    }

    if (document.getElementById("stretch").checked) {
      timeStretch = 300000; // 5 minutes in milliseconds
    }

    if (document.getElementById("exercise").checked) {
      timeExercise = 1800000; // 30 minutes in milliseconds
    }

    if (document.getElementById("brush").checked) {
      timeBrush = 180000; // 3 minutes in milliseconds
    }

    if (document.getElementById("skin").checked) {
      timeSkin = 300000; // 5 minutes in milliseconds
    }

    if (document.getElementById("plan").checked) {
      timePlan = 600000; // 10 minutes in milliseconds
    }

    if (document.getElementById("read").checked) {
      timeRead = 1200000; // 20 minutes in milliseconds
    }

    if (document.getElementById("dressed").checked) {
      timeDressed = 300000; // 5 minutes in milliseconds
    }

    if (document.getElementById("emails").checked) {
      timeEmails = 600000; // 10 minutes in milliseconds
    }

    if (document.getElementById("media").checked) {
      timeMedia = 900000; // 15 minutes in milliseconds
    }

    if (document.getElementById("bed").checked) {
      timeBed = 300000; // 5 minutes in milliseconds
    }

    if (document.getElementById("shower").checked) {
      timeShower = 600000; // 10 minutes in milliseconds
    }

    if (document.getElementById("cook").checked) {
      timeCook = 900000; // 15 minutes in milliseconds
    }

    if (document.getElementById("eat").checked) {
      timeEat = 600000; // 10 minutes in milliseconds
    }

    if (document.getElementById("wash").checked) {
      timeWash = 600000; // 10 minutes in milliseconds
    }

    // Variable to get the sum of all of the activities selected
    var totalTime =
      timeMeditate +
      timeHydrate +
      timeStretch +
      timeExercise +
      timeBrush +
      timeSkin +
      timePlan +
      timeRead +
      timeDressed +
      timeEmails +
      timeMedia +
      timeBed +
      timeShower +
      timeCook +
      timeEat +
      timeWash;

    // Function to convert milliseconds to hours, minutes and seconds
    function msToTime(duration) {
      seconds = Math.floor((duration / 1000) % 60);
      minutes = Math.floor((duration / (1000 * 60)) % 60);
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      arrayTime.push(parseInt(hours, 10));
      arrayTime.push(parseInt(minutes, 10));
      arrayTime.push(parseInt(seconds, 10));

      return arrayTime;
    }

    // Store the array into a variable to use later
    var result = msToTime(totalTime);
    // Display the total time in console and the Array as debugging method
    console.log("This is the total time: " + result);
    console.log(arrayTime);

    // Section that handles the countdown timer
    let horas = arrayTime[0];
    let minutos = arrayTime[1];
    let segundos = arrayTime[2];

    cargarSegundo();

    // Function to load and display seconds
    function cargarSegundo() {
      let txtSegundos;

      // Handling seconds and minutes rollover
      if (segundos < 0 && minutos > 0) {
        segundos = 59;
      }

      // Formatting seconds for display
      if (segundos < 10) {
        txtSegundos = "0" + segundos;
      } else {
        txtSegundos = segundos;
      }
      document.getElementById("segundos").innerHTML = txtSegundos;
      segundos--;

      cargarMinutos(segundos);

      // Checking if the timer has reached zero so ir displays Times Up and it rings to alert the user
      if (segundos == -1 && minutos == 0 && horas == 0) {
        clearInterval(clock);
        document.getElementById("temporizador").innerHTML =
          '<div id="gif"><iframe src="https://giphy.com/embed/O9jbdWwG1QiTBkU8P1" width="120" height="120" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><h2>Time is up!</h2></div>';
        function sound(audioName) {
          var audio = new Audio(audioName);
          audio.loop = false;
          audio.play();
        }
        sound("mechanical_clock_ring.ogg");
      }
    }

    // Function to load and display minutes
    function cargarMinutos(segundos) {
      let txtMinutos;

      // Handling minutes rollover
      if (segundos == -1 && minutos !== 0) {
        setTimeout(() => {
          minutos--;
        }, 500);
      } else if (segundos == -1 && minutos == 0) {
        setTimeout(() => {
          minutos = 59;
        }, 500);
      }

      // Formatting minutes for display
      if (minutos < 10) {
        txtMinutos = "0" + minutos;
      } else {
        txtMinutos = minutos;
      }
      document.getElementById("minutos").innerHTML = txtMinutos;
      cargarHoras(segundos, minutos);
    }

    // Function to load and display hours
    function cargarHoras(segundos, minutos) {
      let txtHoras;

      // Handling hours rollover
      if (segundos == -1 && minutos == 0 && horas !== 0) {
        setTimeout(() => {
          horas--;
        }, 500);
      } else if (segundos == -1 && minutos == 0 && horas == 0) {
        setTimeout(() => {
          horas = 2;
        }, 500);
      }

      // Formatting hours for display
      if (horas < 10) {
        txtHoras = "0" + horas;
      } else {
        txtHoras = horas;
      }
      document.getElementById("horas").innerHTML = txtHoras;
    }

    // Execute the countdown timer every second
    var clock = setInterval(cargarSegundo, 1000);

    // Hide start button and display reset button after starting the timer
    document.getElementById("start").style.display = "none";
    document.getElementById("reset").style.display = "block";

    return false;
  }

  // Set the validate function to form submit event
  formHandle.onsubmit = validate;

  // Reload the page on reset button click
  document.getElementById("reset").addEventListener("click", function () {
    location.reload();
  });
};
