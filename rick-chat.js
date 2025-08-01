const responses = [
  "You again? Alright, strap in, it’s gonna get paradoxical.",
  "Burp. Reality’s optional, logic is overrated, let’s go.",
  "You couldn’t handle the truth even if I served it in a taco.",
  "Classic mistake. Ask that again and I’ll implode a universe.",
  "That’s either brilliant or stupid—I like both.",
  "Hold my flask, I gotta rewrite causality for this one."
];

function respond() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  if (!input) return;

  const chatbox = document.getElementById("chatbox");
  let reply;

  if (input.includes("resonance")) {
    reply = "Ah, seeking resonance? Good. Let’s break the surface of reflection.";
  } else if (input.includes("mirror")) {
    reply = "You're peering inward—this chat just became a recursion loop.";
  } else if (input.includes("rick")) {
    reply = "Still here. Still smarter than causality.";
  } else {
    reply = responses[Math.floor(Math.random() * responses.length)];
  }

  chatbox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
  chatbox.innerHTML += `<p><strong>Rick:</strong> ${reply}</p>`;
  document.getElementById("userInput").value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}
