import { useState } from "react";
import Container from "./components/ui/container";
import Iconbutton from "./components/ui/iconbutton";
import Button from "./components/button"; 
import Input from "./components/input";
import List from "./components/ui/list";
function App() {
  const savedtodos= window.localStorage.getItem("todos")
  const [todo , settodo]= useState("")
  const [listitems,setlistitems]=useState(JSON.parse(savedtodos))
  const handlesave = ()=>{
  setlistitems(perv=>{
    const newitems=[...perv,{title:todo}]
    window.localStorage.setItem("todos",JSON.stringify(newitems))
    return newitems 
     
  })
  settodo("")
  }
  const handledelete=(idx)=>{
    setlistitems(perv=>{
      const itemdelete=[...perv]
      itemdelete.splice(idx,1)
      window.localStorage.setItem("todos",JSON.stringify(itemdelete))
      return(itemdelete)
    })



  }
  return (
   <Container>
    <div className="d-flex">
    <Input value={todo} onChange={e => settodo(e.target.value)}/>
    <Button onClick={handlesave} className="btn btn-success"type="button" id="button-addon2">Save</Button>
    </div>
    <List items={listitems} action={(idx) => <Iconbutton onClick={()=>handledelete(idx)}>Dellete</Iconbutton>}/>
    </Container> 
   
  );
}

export default App;
