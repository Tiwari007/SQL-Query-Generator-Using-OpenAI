const fetchQuery = async() => {

    // const data = await fetch("http://localhost:8000/sample").then(res => res.json())
    // console.log(data);
    
    // return data;


    const rawResponse = await fetch('http://localhost:8000/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({message: "Create a table user"})
  });
  const content = await rawResponse.json();
  console.log(content);
  return content;

}

export default fetchQuery;