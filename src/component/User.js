import { useState } from "react";

const User = ({name})=>{
    const [count] = useState(0);
    const [count2] = useState(1);
    return <div className="user-card">
        <h3>Count: {count}</h3>
        <h2>{name}</h2>
        <h3>Location: India</h3>
        <h4>Contact: abc@gmail.com</h4>
    </div>
}

export default User;