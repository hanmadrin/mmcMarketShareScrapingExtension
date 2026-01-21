import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card h-[300px] w-[300px]">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
