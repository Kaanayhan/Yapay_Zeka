Yapay_Zeka — KaanBot (Web Chat UI) 🤖
A lightweight frontend chat interface (“KaanBot”) built with HTML/CSS/JavaScript. It sends user messages to the Together AI Chat Completions endpoint and displays the model response in a styled chat UI.

Live link (as shown on the repo page) may be unavailable currently.

✨ Features

Simple chat flow: user message → API request → bot reply

Enter-to-send support

Dark mode toggle (adds/removes body.dark)

Modern UI styling: gradients, blurred surfaces, responsive layout

🧩 Tech Stack

HTML / CSS / JavaScript (vanilla)

External API: Together AI Chat Completions (/v1/chat/completions)

Model used: mistralai/Mistral-7B-Instruct-v0.2

📁 Project Structure
Icon.png
index.html
style.css
script.js

Repo file list:

▶️ How to Run Locally

Clone the repo:

git clone https://github.com/Kaanayhan/Yapay_Zeka.git
cd Yapay_Zeka

Open index.html in your browser (double-click), or run with a local server (recommended):

# example (Python)
python -m http.server 5500

Type a message and press Enter (or use the send button if present in your HTML).

⚙️ Configuration
API Key

script.js contains an API key in the client code.

Important: Keeping API keys in frontend JavaScript is unsafe (anyone can view/steal it).
Recommended fix:

Move the API call to a backend (Node/Express, Firebase Functions, etc.)

Store the key in environment variables

Call your backend from the browser instead

🧠 How It Works (High Level)

User input is read from #input

The message is appended into #chatbox

A “typing” placeholder is shown

A POST request is sent to Together AI with:

model

messages: [{ role: "user", content: text }]

temperature

The bot response is rendered back into the chatbox

✅ Possible Improvements

Server-side proxy for API key security

Conversation memory (send full message history instead of only the last user message)

Streaming responses (token-by-token)

Better message rendering (bubble layout consistently using CSS classes)

📄 License

If you want, I can add a standard license section (MIT/Apache-2.0) and a LICENSE file.
