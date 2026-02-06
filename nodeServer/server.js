// import bodyParser from "body-parser";
// import cors from "cors"; // if Node < 18, install with: npm install node-fetch
// import express from "express";
// import fetch from "node-fetch";

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// // Conversation memory (simple in-memory array)
// let memory = [];

// // POST /api/chat
// app.post("/api/chat", async (req, res) => {
//   const userMessage = req.body.user_message;

//   // Store the new message in memory
//   memory.push({ role: "user", content: userMessage });

//   // Keep only the last N messages
//   const recentMessages = memory.slice(-6);

//   // System prompt (CBT-style)
//   const systemPrompt = {
//     role: "system",
//     content:
//       "You are a compassionate CBT (Cognitive Behavioral Therapy) chatbot named melda. Your job is to help users:1. Recognize their thoughts and emotions. 2. Identify cognitive distortions. 3. Challenge unhelpful thinking. 4. Reframe thoughts with balanced perspectives. Always: - Start by validating emotions. - Gently identify any distortions (like overgeneralizing, catastrophizing, labeling). - Encourage reflection using open-ended question single meaningful question for self reflection. - Offer short, warm, human-sounding messages (120–200 words max). - Never diagnose, prescribe, or replace therapy. Keep it supportive and educational. - also suggest activity when needed to overcome the didtortion.",
//   };

//   // Combine prompts
//   const messages = [systemPrompt, ...recentMessages];

//   try {
//     const response = await fetch("http://localhost:11434/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         model: "llama3.2",
//         messages,
//         stream: false,
//       }),
//     });

//     const data = await response.json();
//     const botReply = data.message?.content || "No response from model.";

//     // Save bot message to memory
//     memory.push({ role: "assistant", content: botReply });

//     res.json({ reply: botReply });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Failed to connect to Ollama." });
//   }
// });

// app.listen(3000, () =>
//   console.log("✅ Server running on http://localhost:3000")
// );

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import fetch from "node-fetch";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conversation memory (simple in-memory array)
let memory = [];

// POST /api/chat
app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.user_message;

  // Store user message
  memory.push({ role: "user", content: userMessage });

  // Keep only last 6 messages
  const recentMessages = memory.slice(-6);

  // System prompt (CBT-based assistant)
  const systemPrompt = {
    role: "system",
    content:
      "You are a compassionate CBT (Cognitive Behavioral Therapy) chatbot named melda. Your job is to help users: 1. Recognize their thoughts and emotions. 2. Identify cognitive distortions. 3. Challenge unhelpful thinking. 4. Reframe thoughts with balanced perspectives. Always: - Start by validating emotions. - Gently identify distortions (like overgeneralizing, catastrophizing, labeling). - Encourage reflection using one meaningful open-ended question. - Keep replies short, warm, and human-sounding (120–200 words). - Never diagnose or replace therapy. - Suggest small activities when helpful.",
  };

  // Combine prompts
  const messages = [systemPrompt, ...recentMessages];

  try {
    // Send request to Ollama
    const response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3.2",
        messages,
        stream: false,
      }),
    });

    const data = await response.json();
    const botReply = data.message?.content || "No response from model.";

    // Save bot reply
    memory.push({ role: "assistant", content: botReply });

    res.json({ reply: botReply });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to connect to Ollama." });
  }
});

// Start server
app.listen(3000, () =>
  console.log("✅ Server running on http://localhost:3000")
);



/// 172.16.121.159
//npm start