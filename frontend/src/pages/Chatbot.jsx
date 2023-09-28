import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
const API_KEY = "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";

const Chatbot = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am an AI Health Assistant!",
      sender: "ChatGPT",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    }
  
    // update our messages state
    setMessages(state => [...state, newMessage]);
    // set a typing indocator (chatgpt is typing)
    setTyping(true);
    // process message to chatGPT (send it over and see the response)
    await processMessageToChatGPT([newMessage]); // pass newMessage inside an array
  };
  

  async function processMessageToChatGPT(chatMessages) {
    // chatMessages { sender: "user" or "Assistant", message: "The message content here" }
    // apiMessages {role: "user" or "Assistant", content: "The message content here" }
    const apiMessages = chatMessages.map((messageObject)=> {
      let role = messageObject.sender === "ChatGPT" ? "assistant" : "user"
      return { role: role, content: messageObject.message}
    });
    

    // role: "user" -> a message from the user, "assistant" -> a response from chatGPT
    // "system" -> generally one initial message defining HOW we want chatgpt to talk
    const systemMessage = {
      role: "system",
      content: "Speak like a doctor" 
      // speak like a doctor, Explain like I am 10 years old
    }

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages 
      //  [messages1, messages2, messages3]
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer "+ API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data)=>{
      return data.json();
    }).then((data)=>{
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "chatGPT"
      }
      ]);
      setTyping(false);
    })
  }

  return (
    <div className="App">
      <div className="max-w-full lg:h-screen mx-auto" >
        <MainContainer>
          <ChatContainer>
            <MessageList
            scrollBehavior="smooth"
              typingIndicator={
                typing ? 
                  <TypingIndicator content="AI Health Assistant is typing" />
                : null
              }
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
              
            </MessageList>
            <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
              />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
};

export default Chatbot;
