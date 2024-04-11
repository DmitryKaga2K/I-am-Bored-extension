async function fetchRandomActivity() {
  const type = document.getElementById("type").value;
  let apiUrl = "https://www.boredapi.com/api/activity/";

  if (type) {
    apiUrl += `?type=${type}`;
  }

  const response = await fetch(apiUrl);

  if (response.ok) {
    const data = await response.json();
    displayActivity(data);
  } else {
    console.error("Could not fetch activity", response.statusText);
  }
}

function displayActivity(activityData) {
  const activityElement = document.getElementById("activity");
  activityElement.textContent = activityData.activity;
}

function generateAnotherActivity() {
  fetchRandomActivity();
}

document.addEventListener("DOMContentLoaded", fetchRandomActivity);
document
  .getElementById("generate-btn")
  .addEventListener("click", generateAnotherActivity);
