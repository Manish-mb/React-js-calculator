import React ,{ useState } from 'react';
import './App.css';

const ProfileState = () => {
const [count,setCount] = useState(0)
function increament(){
    setCount(count+1)
}
function decrement(){
    setCount(count-1)
}
return(
<div>
   <button onClick={increament}>+</button>{count}<button onClick={decrement}>-</button>
</div>

);

}
export default ProfileState;