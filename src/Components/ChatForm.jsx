import {useRef} from 'react';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {

    const inputRef = useRef(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();

        if(!userMessage) return;

        console.log(userMessage);
        inputRef.current.value = '';

        // Update chat history with user message
        setChatHistory((h) => [...h, { role: 'user', text: userMessage }]);
        

        // Add thinkng message from model after a delay
        setTimeout(() => {
          setChatHistory((h) => [...h, { role: 'model', text: "Thinking..." }]);

          // Generate bot response
            generateBotResponse([...chatHistory, { role: 'user', text: userMessage }]);
        }, 600);

        
  };

  return (
    <form action="" className='chat-form' onSubmit={handleFormSubmit}>
        <input ref={inputRef} type="text" className="message-input" placeholder="Type your message..." required />
        <button className="send-button material-symbols-outlined">send</button>
    </form>
  )
}

export default ChatForm;