

var existCondition = setInterval(function() {
  var btn = $('.karNext');
  if (btn.is(':hidden')) {
    btn.show();
    if (btn.is(':hidden')) {
      btn.removeAttr('hidden');
    }
  }
}, 300);