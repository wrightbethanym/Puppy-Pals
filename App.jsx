import { useState } from "react";
import { puppyList } from "./data"
import "./App.css";
import "./index.css"

function App() {
  // eslint-disable-next-line
  const [puppies, setPuppies] = useState(puppyList);
  const [featuredPupId, setFeaturedPupId] = useState(null);

  
function handleClick(id){
  setFeaturedPupId(id);
  console.log("running handleclick");
}

const featuredPup = puppies.find(puppy=>puppy.id === featuredPupId);
  return (
  <>
  {puppies.map(puppy=>(<p key={puppy.id} onClick={()=>handleClick(puppy.id)}>
    {puppy.name}</p>
  ))}
  {featuredPup && (<div>
    <h2>{featuredPup.name}</h2>
    <ul>
      <li>Age: {featuredPup.age}</li>
      <li>Email: {featuredPup.email}</li>
    </ul>
    </div>
    )}
  </>);
}

export default App;
