// wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function (){
  const responseDiv = document.getElementById("response");

  const  moodResponses = {
    happy: {text: "That's awesome to hear!😊", color: "green"},
    sad: {text: "Sorry to hear that. Stay strong ❤️", color: "blue"},
    angry: {text: "Take a deep breath. You've got this. 💪", color: "orange"},
    anxious: {text: "It's okay to feel that way. You're not alone. 🌱", color: "purple" },
    excited: {text: "Yay! Keep that energy going! 🚀", color: "limegreen"}
  };

  document.querySelectorAll(".mood-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const mood = btn.getAttribute("data-mood");
      const response = moodResponses[mood];
      responseDiv.textContent = response.text;
      responseDiv.style.color = response.color;
    });
  });
});
