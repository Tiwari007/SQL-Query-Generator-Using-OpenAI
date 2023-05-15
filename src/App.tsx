import "./styles.css";

import { useQuery } from 'react-query'

import MessagesContainer from "./components/MessagesContainer";
import QueryContainer from "./components/QueryContainer";

import fetchQuery from './api/fetchQuery'



export default function App() {

  // const { data, refetch, isLoading, error } = useQuery("fetchSqlQuery", fetchQuery, {
  //   refetchOnWindowFocus: false,
  //   enabled: false // disable this query from automatically running
  // });





  const getQuery = async () => {
    // refetch();

    try {

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Create a Table User"
        })
      }

      const response = await fetch("http://localhost:8000/completions", options)
      const data = await response.json()

      console.log(data);
      
      
    } catch (error) {
      console.log(error);
      
    }

    // console.log("data", data);

  }

  // if (isLoading) return <p>Loading ...</p>;
  // if (error) return <p>{`Error! ${error}`}</p>;

  return (
    <div className="container">
      <MessagesContainer />
      <input type="text" placeholder="🔍 Write Text To Serch Query" />
      <QueryContainer />
      <div className="output-buttons">
        <button id="get-query" onClick={getQuery}>Get Query</button>
        <button id="clear-chat">Clear Chat</button>
      </div>
    </div>
  );
}
