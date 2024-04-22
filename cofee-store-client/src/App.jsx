
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const allCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(allCoffee);
  console.log(coffees);
  return (
    <div className='container mx-auto'>
      <h2 className=' text-center '>Coffee count : {coffees.length}</h2>

      <div className='grid gap-8 grid-cols-1 md:grid-cols-2'>
        {
          coffees.map(coffee => <Card key={coffee._id} coffee = {coffee} coffees ={coffees} setCoffees ={setCoffees}> </Card>)
        }
      </div>
    </div>
  )
}

export default App
