// rick-chat.js
const responses = [
  "Burrrp... Are you still here?",
  "I'm smarter than you in every dimension.",
  "Seriously? That's what you ask?"
];

function respond() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const chatbox = document.getElementById("chatbox");
  let reply;

  if (input.includes("resonance")) {
    reply = "Mirror mode activated. You talk—I reflect.";
  } else if (input.includes("invoke")) {
    reply = "Oracle online. Ask the flame.";
  } else {
    reply = responses[Math.floor(Math.random() * responses.length)];
  }

  chatbox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
  chatbox.innerHTML += `<p><strong>Rick:</strong> ${reply}</p>`;
  document.getElementById("userInput").value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}
