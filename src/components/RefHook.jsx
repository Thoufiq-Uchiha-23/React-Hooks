import { useState } from "react"

const RefHook = () => {
    const [name, setName] = useState('')
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name}</div>
    </div>
  )
}

export default RefHook
