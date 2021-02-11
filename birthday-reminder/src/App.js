import React, { useState } from 'react'
import './App.css'
import data from './data'
import List from './List'

function App() {
  const [people, setPeople] = useState(data)
  return (
    <div className='App'>
      <main>
        <section className='container'>
          <h3>{people.length} birthday today</h3>
          <List people={people} />
          <button className='btn' onClick={() => setPeople([])}>
            clear all
          </button>
        </section>
      </main>
    </div>
  )
}

export default App
