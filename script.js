// script.js
function logIn() {
  const name = document.getElementById('username').value.trim();
  if (name) {
    document.getElementById('journal-section').classList.remove('hidden');
    document.getElementById('username').style.display = 'none';
    document.querySelector('button').style.display = 'none';
  } else {
    alert('Please enter your name.');
  }
}

function saveEntry() {
  const mood = document.getElementById('mood').value;
  const text = document.getElementById('entryText').value.trim();
  const media = document.getElementById('mediaInput').files[0];

  if (!text && !media) {
    alert('Please write something or attach a file.');
    return;
  }

  const entry = document.createElement('div');
  entry.className = 'entry';
  entry.innerHTML = `<strong>Mood:</strong> ${mood}<br><strong>Note:</strong> ${text || "No text"}<br>`;

  if (media) {
    const mediaURL = URL.createObjectURL(media);
    if (media.type.startsWith("video")) {
      const video = document.createElement('video');
      video.src = mediaURL;
      video.controls = true;
      entry.appendChild(video);
    } else if (media.type.startsWith("audio")) {
      const audio = document.createElement('audio');
      audio.src = mediaURL;
      audio.controls = true;
      entry.appendChild(audio);
    }
  }

  document.getElementById('entriesContainer').appendChild(entry);
  document.getElementById('entryText').value = '';
  document.getElementById('mediaInput').value = '';
}

function logOut() {
  location.reload();
}
