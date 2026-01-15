import ChatbotIcon from "./Components/ChatbotIcon";
import ChatForm from "./Components/ChatForm";
import ChatMessage from "./Components/ChatMessage";
import { useState, useRef, useEffect } from "react";

function App() {

  const [chatHistory, setChatHistory] = useState([]);
  const ChatBodyRef = useRef();

  const generateBotResponse = async (history) => {

    const updateHistory = (text) => {
      // To update thinking....
      setChatHistory(h => [...h.filter(msg => msg.text !== "Thinking..."), { role: 'model', text }]);
    }

    // Format chat history for API request
    history = history.map(({role, text}) => ({ role, parts: [{ text }] }));

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: history })
    };

    try {
      //make api call
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();

      if(!response.ok) {
        throw new Error(data.error.message || "Failed to fetch bot response");
      }

      const apiResponceText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1').trim(); //remove markdown bold syntax

      updateHistory(apiResponceText);
    }
    catch (error) {
      console.error("Error fetching bot response:", error);
    }

  }

  useEffect(() => {
    // Auto Scroll
    ChatBodyRef.current.scrollTop = ChatBodyRef.current.scrollHeight;
  }, [chatHistory]);

  return (
    <div className="container">
      <div className="chatbot-popup">

        {/* Header */}
        <div className="chatbot-header">
          <div className="header-info">
            <ChatbotIcon />

            <h2 className="logo-text">Chat-Bot</h2>
          </div>
            <button className="material-symbols-outlined">keyboard_arrow_down</button>
        </div>

        {/* Body */}
        <div ref={ChatBodyRef} className="chatbot-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hello! I am your AI Chatbot. How can I assist you today?
            </p>
          </div>

          {/* render chat history dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
          
        </div>

        {/* Footer */}
        <div className="chatbot-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>
      </div>
    </div>
  );
};
  
  
export default App;
