'use strict';

(function () {
  const setupOpenBtn = document.querySelector('.setup-open');
  const setupCloseBtn = document.querySelector('.setup-close');
  const setupPopup = document.querySelector('.setup');
  const similarWizardTemplate = document.querySelector('#similar-wizard-template');
  const setupSimilar = document.querySelector('.setup-similar');
  const setupSimilarList = document.querySelector('.setup-similar-list');
  const WIZARDS_COUNT = 4;
  
  const names = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  
  const lastName = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  
  const coatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  
  const eyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  let setupOpenHandler = function () {
    setupPopup.classList.remove('hidden');
  }

  let setupCloseHandler = function () {
    setupPopup.classList.add('hidden');
  }

  let renderWizard = function () {
    let wizardEl = similarWizardTemplate.content.cloneNode(true);
    wizardEl.querySelector('.setup-similar-label').textContent = `${names[getRandomInt(0, names.length-1)]} ${lastName[getRandomInt(0, lastName.length-1)]}`;
    wizardEl.querySelector('.wizard-coat').style.fill = `${coatColors[getRandomInt(0, names.length-1)]}`;
    wizardEl.querySelector('.wizard-eyes').style.fill = `${eyesColors[getRandomInt(0, names.length-1)]}`;
    
    return wizardEl;
  }  

  let showSimilarWizars = function () {
    setupSimilar.classList.remove('hidden');
  }

  let buildSimilarWizards = function () {
    let similarWizards = document.createDocumentFragment();
    
    for (let i = 0; i < WIZARDS_COUNT; i++) {
      similarWizards.appendChild(renderWizard());
    }

    setupSimilarList.appendChild(similarWizards);
    showSimilarWizars();
  }
  
  setupOpenBtn.addEventListener('click', setupOpenHandler);
  setupCloseBtn.addEventListener('click', setupCloseHandler);
  buildSimilarWizards();
})();