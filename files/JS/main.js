(function ($) {
  'use strict'
  $('#contactForm').validate({
    rules: {
      userName: 'required',
      userSubject: 'required',
      userEmail: {
        required: true,
        email: true
      },
      userMessage: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      userName: 'Please enter your name',
      userSubject: 'Please enter your subject',
      userEmail: 'Please enter a valid email address',
      userMessage: 'Please enter a message'
    },
    /* submit via ajax */

    submitHandler: function (form) {
      const $submit = $('.submitting')
      const waitText = 'Submitting...'
    } // end submitHandler

  })
  // Form
  $('#sendThisToMe').on('click', function () {
    if ($('#contactForm').validate().form()) {
      $('#ftco-loader').addClass('show')
      thisOneIsdefined()
    }
  })
  //   contactForm()
})(jQuery)
