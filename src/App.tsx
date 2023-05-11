import "./styles.css";

import MessagesContainer from "./components/MessagesContainer";
import QueryContainer from "./components/QueryContainer";

export default function App() {
  return (
    <div className="container">
      <MessagesContainer />
      <input type="text" placeholder="🔍 Write Text To Serch Query" />
      <QueryContainer />
      <div className="output-buttons">
        <button id="get-query">Get Query</button>
        <button id="clear-chat">Clear Chat</button>
      </div>
    </div>
  );
}
