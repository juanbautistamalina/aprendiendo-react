import './App.css'
import Card from './components/Card'
import vehicles from './data/vehicles.js'
import Vehicles from "./data/vehicles.js"
import ShowHide from './components/ShowHide.jsx'

function App() {
  const vehicleList = vehicles.map(v => {
    return <Card title={v.name} description={v.description}/>
  })

  return (
      <div className='App'>
        <h1>Hello World</h1>
        <div className='container'>
        {vehicleList}
        </div>
        <div className='cont'>
          <ShowHide />
        </div>
        
      </div>
  )
}

export default App
