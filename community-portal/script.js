function showConfirmation() {
  document.getElementById('outputMessage').value = 'Thank you for registering!';
}

function validatePhone(el) {
  const regex = /^[0-9]{10}$/;
  if (!regex.test(el.value)) {
    alert('Invalid phone number');
  }
}

function updateFee(select) {
  const fee = select.value === "concert" ? "$50" : select.value === "workshop" ? "$30" : "$0";
  document.getElementById("feeDisplay").textContent = "Fee: " + fee;
}

function enlargeImage(el) {
  el.style.transform = "scale(1.5)";
  el.style.transition = "transform 0.3s";
}

function countChars(el) {
  document.getElementById("charCount").textContent = "Characters: " + el.value.length;
}

function videoReady() {
  alert("Video ready to play");
}

window.onbeforeunload = function() {
  return "Are you sure you want to leave without saving?";
};

function savePreference() {
  const value = document.getElementById("eventType").value;
  localStorage.setItem("preferredEvent", value);
}

window.onload = function() {
  const saved = localStorage.getItem("preferredEvent");
  if (saved) {
    const eventType = document.getElementById("eventType");
    eventType.value = saved;
    updateFee(eventType);
  }
};

function clearPreferences() {
  localStorage.clear();
  sessionStorage.clear();
  alert("Preferences cleared");
}

function findNearbyEvents() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError, {
      enableHighAccuracy: true,
      timeout: 10000,
    });
  } else {
    alert("Geolocation not supported.");
  }
}

function showPosition(position) {
  const coords = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
  document.getElementById("geoLocation").textContent = coords;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("Permission denied.");
      break;
    case error.TIMEOUT:
      alert("Location request timed out.");
      break;
    default:
      alert("An unknown error occurred.");
  }
}
