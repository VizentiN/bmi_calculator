import { useState } from 'react'

import Forms from './components/Forms'


function App() {
  const [formVisivel, setFormVisivel] = useState(true);

  return (
    <>
      {formVisivel && (
      <Forms/>
    )}
      {<button onClick={() => setFormVisivel(!formVisivel) } className='toggleButton' type="button">Toggle Form</button>}
    </>
  )
}

export default App
