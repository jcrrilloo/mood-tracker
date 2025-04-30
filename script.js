// wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function (){
  const moodInput = document.getElementById("moodInput");
  const submitButton = document.getElementById("submitMood");
  const responseDiv = document.getElementById("response");

  const  moodResponses = {
    happy: {text: "That's awesome to hear!😊", color: "green"},
    sad: {text: "Sorry to hear that. Stay strong ❤️", color: "blue"},
    angry: {text: "Take a deep breath. You've got this. 💪", color: "orange"},
    anxious: {text: "It's okay to feel that way. You're not alone. 🌱", color: "purple" },
    excited: {text: "Yay! Keep that energy going! 🚀", color: "limegreen"}
  };

  submitButton.addEventListener("click", function (){
    const mood = moodInput.value.trim().toLowerCase();

    if (mood === "") {
      responseDiv.textContent = "Please enter your mood!";
      responseDiv.style.color = "red";
      return;
    }

    let found = false;
    for(let keyword in moodResponses) {
      if(mood.includes(keyword)) {
        responseDiv.textContent = moodResponses[keyword].text;
        responseDiv.style.color = moodResponses[keyword].color;
        found = true;
        break;
      }
    }

    if(!found) {
      responseDiv.textContent = `You are feeling: ${mood}`;
      responseDiv.style.color = "black";
    }

    moodInput.value = ""; // clear input after submitting
  })
});
