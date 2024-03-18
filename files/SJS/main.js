function thisOneIsdefined () {
  const formData = new FormData($('#contactForm')[0])
  formData.append('service_id', serID)
  formData.append('template_id', templateId)
  formData.append('user_id', userId)

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
    type: 'POST',
    data: formData,
    contentType: false, // auto-detection
    processData: false // no need to parse formData to string
  }).done(function () {
    // Show the custom alert
    $('#customAlert').addClass('showSuccess')
    $('#customAlert span').before('<i class="icon-check"></i>')
    $('#customAlert span').text('Your message has been sent successfully!')
    // Automatically hide the alert after 3 seconds (adjust as needed)
    setTimeout(function () {
      $('#customAlert').removeClass('showSuccess')
    }, 2000)
    $('#name').val('')
    $('#email').val('')
    $('#subject').val('')
    $('#message').val('')

    $('#ftco-loader').removeClass('show')

    // Error Message
  }).fail(function (error) {
    $('#customAlert').addClass('showError')
    $('#customAlert span').before('<i class="icon-error_outline"></i>')
    $('#customAlert span').text('Server error please try again!')
    setTimeout(function () {
      $('#customAlert').removeClass('showError')
    }, 2000)
    $('#ftco-loader').removeClass('show')
    console.log('Oops... ' + JSON.stringify(error))
  })
}

// File Download
function fileDownloadResume () {
  const fileName = '/files/cv/Iftikhar Ahmad (Resume CV).pdf'

  // Create a link element
  const a = document.createElement('a')

  // Set the href attribute to the filename
  a.href = fileName

  // Set the download attribute to specify the desired filename for the user
  a.download = fileName

  // Simulate a click event on the link to trigger the download
  a.click()
}



// Calculate the age
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

// Get the element to display the age
const ageElement = document.getElementById('thisMyAge');

// Set the birth year (replace '1997' with the actual birth year)
const birthYear = 1997;

// Calculate the age and display it
const age = calculateAge(birthYear);
ageElement.textContent = age;
