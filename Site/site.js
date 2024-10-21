function toggleMenu() {
  var menu = document.getElementById("side-menu");
  if (menu.style.width === "250px") {
      menu.style.width = "0";
  } else {
      menu.style.width = "250px";
  }

  document.addEventListener('click', function(event) {
      var menuIcon = document.getElementById("menu-icon");
      if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
          menu.style.width = "0";
      }
  });
}

function unlockLevel(nextLevel) {
  var nextExercise = document.querySelector(`#level-${nextLevel} .exercise`);
  if (nextExercise) {
      nextExercise.disabled = false;
      nextExercise.classList.remove('locked');
  }
}

function playAudioAndUnlockNext(audioId, nextLevel) {
  var audio = document.getElementById(audioId);
  audio.play();
  audio.onended = function() {
      unlockLevel(nextLevel);
  };
}

function playAudioAndComplete(audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
  audio.onended = function() {
      document.getElementById('completion-message').style.display = 'block';
      var completionAudio = document.getElementById('fim-audio');
      completionAudio.play();
  };
}

function playVideo() {
  const video = document.getElementById('myVideo');
  const overlay = document.getElementById('videoOverlay');
  overlay.style.display = 'block';
  video.style.display = 'block';
  video.play();
}

function hideVideo() {
  const video = document.getElementById('myVideo');
  const overlay = document.getElementById('videoOverlay');
  video.pause();
  video.currentTime = 0;
  overlay.style.display = 'none';
  video.style.display = 'none';
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
      hideVideo();
  }
});

function playAudioAndRedirect(audioId, nextPageUrl) {
  var audio = document.getElementById(audioId);
  audio.play();
  audio.onended = function() {
      window.location.href = nextPageUrl;
  };
}


function toggleOption(element) {
  // Toca o áudio ao clicar na opção
  const audio = document.getElementById('clickAudio');
  audio.play();
  
  // Remove a classe 'selected' de todas as opções
  const options = document.querySelectorAll('.option');
  options.forEach(option => option.classList.remove('selected'));
  
  // Adiciona a classe 'selected' à opção clicada
  element.classList.add('selected');
}

function playClickAudio() {
  const audio = document.getElementById('clickAudio'); // Obtém o elemento de áudio
  audio.currentTime = 0; // Reseta o tempo do áudio para o início
  audio.play(); // Toca o áudio
}
function playAnswerAudio(audioId, element) {
  const audio = document.getElementById(audioId); // Obtém o elemento de áudio correspondente
  audio.currentTime = 0; // Reseta o tempo do áudio
  audio.play(); // Toca o áudio da resposta
  selectOption(element);
}

function selectOption(element) {
  // Remove a seleção de todas as opções
  const options = document.querySelectorAll('.option');
  options.forEach(option => {
      option.classList.remove('selected');
  });

  // Adiciona a classe de selecionado à opção clicada
  element.classList.add('selected');
}