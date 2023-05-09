
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Chocolets from './components/Chocolets/Chocolets'
import Header from './components/Header/Header'

function App() {
      
      const chocolets = useLoaderData()

  return (
    <>
      <Header></Header>
      <Chocolets chocolets={chocolets}></Chocolets>
    </>
  )
}

export default App
