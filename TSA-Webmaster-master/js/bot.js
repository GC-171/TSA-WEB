once = true;
$(window).on('scroll',function() {
  if (checkVisible($('#demo'))) {
if (once) {
  once=false;
    var botui = new BotUI('bot'); 

botui.message.bot({ // show first message
  delay: 100,
  content: 'Hello. I\'m A.I.D.A. I am your personal tutor!',
  loading: true 

}).then(function () {
  return botui.message.bot({ // second one
    delay: 100,
    loading: true,
    content: 'I can help you study topics and prepare for upcoming exams.'
  });
}).then(function () {
  return botui.message.bot({ // third one
    delay: 100,
    loading: true,
    content: 'Send me a picture of content you\'re learning to get started.'
  });
}).then(function () {
  return botui.action.button({ // let user choose something
    delay: 0,
    action: [{
      text: 'Send Math Sheet',
      value: 'math'
    }, {
      text: 'Send Science Sheet',
      value: 'science'
    }, {
      text: 'Send History Sheet',
      value: 'history'
    }]
  })
}).then(function (res) {
  return botui.message.bot({
    delay: 500,
    loading: true, 
    content: 'Thanks! Please give me a moment to analyze your ' + res.value.toLowerCase() + ' document.',
  });
}).then(function () {
  botui.message.bot({
    delay: 700,
    loading: true,
    content: 'Ok! I have generated practice questions on this topic! I sent them to your email.'
  }).then(function () {
    return botui.action.button({ // let user choose something
      delay: 0,
      action: [{
        text: 'I\'m done with the practice. What now?',
        value: 'done'
      }]
    })
  }).then(function (res) {
    botui.message.bot({
      delay: 700,
      loading: true,
      content: 'Based on your approaches and answers to these questions, I emailed you a personalized study plan.'
    })}).then(function (res) {
      botui.message.bot({
        delay: 700,
        loading: true,
        content: 'Let me know if you have any questions!'
      })}).then(function () {
        return botui.action.button({ // let user choose something
          delay: 0,
          action: [{
            text: 'Thank you!',
            value: 'done'
          }]
        })
      }).then(function (res) {
        botui.message.bot({
          delay: 700,
          loading: true,
          content: 'No problem! That\'s why I exist.',
        })});
});
  } else {
      // do nothing
  }
}
});
function checkVisible(elm, eval) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(), // Viewport Height
    scrolltop = $(window).scrollTop(), // Scroll Top
      y = $(elm).offset().top,
      elementHeight = $(elm).height(); 

      if (eval == "object visible") {
          ok = (y < (viewportHeight/2 + scrolltop)) && (y > (scrolltop - elementHeight))
          return ok;
      } if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}
