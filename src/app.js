import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'

import './style.scss'

const App = () => {
  return(
    <div>
      <Header />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
