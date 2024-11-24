import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h1 className="mt-4 text-3xl font-semibold">Nice template</h1>
      <button
        className="w-fit rounded-md bg-stone-700 px-2 py-1 text-stone-50"
        onClick={() => setCount(count => count + 1)}
        type="button"
      >
        Count is <span>{count}</span>
      </button>
    </div>
  )
}

export default App
