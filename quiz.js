var quizData;

function fillMultipleChoice() {
  $('input:radio[value=true]').prop('checked', true);
}

function fillMultiSelect() {
  $('input:checkbox[value=true]').prop('checked', true);
}

function todo() {
  $('fieldset').append(JSON.stringify(quizData));
}

function fillAnswers() {
    var type = quizData.type;
    switch (type) {
      case 0:
        fillMultipleChoice();
        break;
      case 1:
        fillMultiSelect();
        break;
      default:
        todo();
        break;
    }
    $("form .btn-submit").prop('disabled', false)
}

function fetchQuizData() {
    $.get("quiz_data.json", function (resp) {
      if (resp.data.length == 1) {
        quizData = resp.data[0];
        fillAnswers();
      }
    }, "json");
}

var existCondition = setInterval(function() {
    if ($("header").children('span').text()) {
        clearInterval(existCondition);
        fetchQuizData();
    }
}, 100);
