document.addEventListener('DOMContentLoaded', () => {
  const progressBar1 = document.querySelector('#bar-1');
  const progressBar2 = document.querySelector('#bar-2');
  const stages = document.querySelectorAll('.app-header__stage');

  let currentStage = 1;

  function setProgressBar (stage, stagesElement) {
    switch (stage) {
      case 1:
        progressBar1.style.width = '0%';
        progressBar2.style.width = '0%';
        changeStagesColor(stagesElement, currentStage);
        break
      case 2:
        progressBar1.style.width = '100%';
        progressBar2.style.width = '0%';
        changeStagesColor(stagesElement, currentStage);
        break
      case 3:
        progressBar1.style.width = '100%';
        progressBar2.style.width = '100%';
        changeStagesColor(stagesElement, currentStage);
        break
      default:
        progressBar1.style.width = '0%';
        progressBar2.style.width = '0%';
        changeStagesColor(stagesElement, currentStage);
    }
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
      })
    })
  }

  setProgressBar(currentStage, stages);

  changeProgressByStage();
})