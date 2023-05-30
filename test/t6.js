$(document).ready(function() {
    $('#play-button').click(function() {
      var resultElement = $('#result');
      var randomIndex = Math.floor(Math.random() * 10) + 1;
      resultElement.text('恭喜您抽到了 ' + randomIndex + ' 號虛擬寵物！');
    });
  });
  
  