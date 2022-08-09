// Grab the patient's selection of doctor and change dropdown default value
const selectedDoctor = $('.doc-options');
let docId;
let docName;
selectedDoctor.on('click',(event) => {
  docName = event.target.textContent.trim();
  docId = event.target.getAttribute("data-id");
  $('#doctor-span').text(docName);
})

// Grab the patient's selected time and change dropdown default value
const selectedTime = $('.time-option');
let time;
selectedTime.on('click', (event) => {
  time = event.target.textContent.trim();
  $('#time-span').text(time);
})

// Grab the patient's selected date
let date;

// Grab the patient's reason for visit
const visitReason = $('#visit-reason');
let inputReason;
visitReason.on('change', () => {
  inputReason = visitReason.val();
})

// Save user input to our Appointment table
const createAppt = async () => {
  // missing to grab date
  if (docId && date && time && inputReason) {
    const response = await fetch(`/api/appointment`, {
      method: "POST",
      body: JSON.stringify({ docId, date, time, inputReason }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert("You can only schedule one appointment with the same doctor at a time.");
    }
  }
};

$('#appointment_submit').on('click', createAppt);

// Handle Bulma's dropdown menus
var dropdown1 = document.getElementById('d1');
dropdown1.addEventListener('click', function (event) {
  event.stopPropagation();
  dropdown1.classList.toggle('is-active');
});

var dropdown2 = document.getElementById('d2');
dropdown2.addEventListener('click', function (event) {
  event.stopPropagation();
  dropdown2.classList.toggle('is-active');
});

// Handles functionality of the datepicker
$('#datepicker').datepicker({
  onSelect: function (dateText, inst) {
    date = dateText;
  }
});

$('button#remove').on('click',(event) => {
  console.log(event.target);
});