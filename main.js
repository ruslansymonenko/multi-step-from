document.addEventListener('DOMContentLoaded', () => {
  const progressBar1 = document.querySelector('#bar-1');
  const progressBar2 = document.querySelector('#bar-2');
  const stages = document.querySelectorAll('.app-header__stage');

  let currentStage = 1;

  function setProgressBar (stage, stagesElement) {
    const formsContainer = document.querySelector('.app-form');

    switch (stage) {
      case 1:
        progressBar1.style.width = '0%';
        progressBar2.style.width = '0%';
        changeStagesColor(stagesElement, currentStage);
        formsContainer.style.transform = 'translateX(-0%)';
        break
      case 2:
        progressBar1.style.width = '100%';
        progressBar2.style.width = '0%';
        changeStagesColor(stagesElement, currentStage);
        formsContainer.style.transform = 'translateX(-100%)';
        break
      case 3:
        progressBar1.style.width = '100%';
        progressBar2.style.width = '100%';
        changeStagesColor(stagesElement, currentStage);
        formsContainer.style.transform = 'translateX(-200%)';
        break
      default:
        progressBar1.style.width = '0%';
        progressBar2.style.width = '0%';
        changeStagesColor(stagesElement, currentStage);
        formsContainer.style.transform = 'translateX(0%)';
    }
  }

  function setFormVisibility (stage) { 
    const forms = document.querySelectorAll('.app-form__display');

    forms.forEach(element => {
      let elementIndex = element.getAttribute('data-formIndex');

      if(elementIndex == stage) {
        element.classList.add('app-form__display--active');
      } else {
        element.classList.remove('app-form__display--active');
      }
    })
  }

  function changeStagesColor (elements, currentIndex) {
    elements.forEach(element => {
      element.classList.remove('app-header__stage--active');
    })

    elements[currentIndex - 1].classList.add('app-header__stage--active');
  }

  function changeProgressByStage () {
    stages.forEach((stage, index) => {
      stage.addEventListener('click', (e) => {
        currentStage = +e.target.textContent;

        setProgressBar(currentStage, stages);
        setFormVisibility(currentStage);
      })
    })
  }

  setProgressBar(currentStage, stages);
  changeProgressByStage();
  setFormVisibility(currentStage);
})