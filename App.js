import React,{useState} from 'react';
import {BiUserCircle,BiComment,BiShare} from 'react-icons/bi';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';

function App() {
const [like,setLike]=useState(false);
const[count,setCount]=useState(0)
//handle likes 
const handleLikes=()=>{
  if(!like){
    setLike(true)
    setCount(count + 1);
  }else{
    setLike(false)
     setCount(count - 1);
  }
}


return (
    <>
<div className="main-container">
<h1 className="text-info">Post Like App</h1>
<h4>Like Count: {count}</h4>
<div className="card" style={{width:'18rem'}}>
<div className="card-header"><BiUserCircle/>
    UserName
</div>

<img src="https://images.unsplash.com/photo-1531564701487-f238224b7ce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" height={'300px'} width="100%" onDoubleClick={handleLikes}  alt="post-image"/>

<div className="card-footer">
{like ?(<AiFillHeart size={30} className='text-danger' onClick={handleLikes} style={{cursor:'pointer'}} />):(
<AiOutlineHeart size={30} onClick={handleLikes} style={{cursor:'pointer'}}/>)}
&nbsp;
<BiComment size={30}/>
&nbsp;
<BiShare size={30}/>

</div>
</div>
</div>
  </>
    
  );
}

export default App;
