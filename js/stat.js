'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  var largestTime = times[0];
  for (var i = 1; i < times.length; i++) {
    if (largestTime < times[i]) {
      largestTime = times[i];
    }
  }

  for (var j = 0; j < names.length; j++) {
    var currentHeigth = (times[j] * 150) / largestTime;
    var posX = ((40 + 50) * j + 130);
    var posY = 100 + (150 - currentHeigth);

    ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
    if (times[j] === largestTime) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(posX, posY, 40, currentHeigth);
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText(names[j], posX, posY - 10);
    ctx.fillText(Math.round(times[j]), posX, posY + currentHeigth + 20);
  }
};
