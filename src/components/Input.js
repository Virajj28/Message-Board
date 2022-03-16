import React from 'react'
import { useState } from 'react';

const Input = () => {
    const [item, setItem] = useState("");
    
  return (
    <div>
        <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Enter something..."
        />
        <button>ENTER</button>
    </div>
  )
}

export default Input