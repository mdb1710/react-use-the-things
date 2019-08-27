import React from 'react'
import { useMyHook } from '@codebymdb/react-all-the-things'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App