import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import data from "./components/data"

function App() {
  const card = data.map(element =>{
      return (
        <Card 
          key = {element.key}
          element = {element}                    
        />
      )      
  })

  return (
  <>
    <Header />
    {card} 
  </>
  )    
}

export default App;
