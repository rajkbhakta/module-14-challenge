var formEl = $('#pizza-form');
var firstNameEl = $('input[name="first-name"]');
var lastNameEl = $('input[name="last-name"]');
var emailEl = $('input[name="email"]');
var githubEl = $('input[name="github"]');

function handleFormSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  console.log('First Name:', firstNameEl.val());
  console.log('Last Name:', lastNameEl.val());
  console.log('Email:', emailEl.val());
  console.log('GitHub:', githubEl.val());

  // Select all checked options
  var checkedEl = $('input:checked');
  var selected = [];

  // Loop through checked options to store in array
  /* for(var i = 0; i < checkedEl; i++) {
      var theCurrentElement = $(checkedEl[i]);
      var theCurrentElementValue = theCurrentElement.val();
      selected.push(theCurrentElementValue);
  }*/
  console.log(checkedEl);
  $.each(checkedEl, function () {
    //console.log(this);
    var theCurrentElement = $(this);
    var theCurrentElementValue = theCurrentElement.val();
    selected.push(theCurrentElementValue);
  });
  console.log('Toppings: ', selected.join(', '));

  // Clear input fields
  $('input[type="text"]').val('');
  $('input[type="email"]').val('');
  $('input[type="checkbox"]').prop('checked', false);
}

// Submit event on the form
formEl.on('submit', handleFormSubmit);
