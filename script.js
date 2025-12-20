const API_KEY = "424814c5e7f819892ab79f8f04e97d2a002ddf9be55f4eefa89e5ee26c014a80";
async function send() {
  const inputEl = document.getElementById('input');
  const text = inputEl.value.trim();
  if (!text) return;

  const chatbox = document.getElementById('chatbox');
  chatbox.innerHTML += `<div><strong>Sen:</strong> ${text}</div>`;
  chatbox.innerHTML += `<div><em>KaanBot Yazıyor...</em></div>`;
  chatbox.scrollTop = chatbox.scrollHeight;
  inputEl.value = "";

  try {
    const res = await fetch("https://api.together.xyz/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: [{ role: "user", content: text }],
        temperature: 0.7
      })
    });

    const data = await res.json();
    chatbox.lastChild.remove();

    if (data.error) {
      throw new Error(data.error.message);
    }

    const reply = data.choices[0].message.content;
    chatbox.innerHTML += `<div><strong>Kaan:</strong> ${reply}</div>`;
  } catch (err) {
    console.error(err);
    chatbox.lastChild.remove();
    chatbox.innerHTML += `<div><strong>Kaan:</strong> Hata: ${err.message}</div>`;
  }

  chatbox.scrollTop = chatbox.scrollHeight;
}
function toggleTheme() {
  document.body.classList.toggle('dark');
}
document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        send();
    }
});