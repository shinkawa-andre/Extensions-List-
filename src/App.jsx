
import Header from './header';
import Filter from './filter';
import data from './data/data.json'
import './App.scss'
import Card from './card';
import { useState } from 'react';

function App() {
  const [cards, setCards] = useState(data);
  const [filter, setFilter] = useState("all");

  function toggleActive(name){
    setCards(prev => prev.map(item => item.name === name
      ? {...item, isActive: !item.isActive}
      : item
    )
    );
  }

  const filterData = cards.filter((item) => {
    if(filter === "active") return item.isActive;
    if(filter === "inactive") return !item.isActive;
    return true;
  });



  return (
    <div className='container'>
      <Header />
      <Filter 
        filter={filter}
        setFilter={setFilter}
      />
      <div className="grid">
        {filterData.map((item) => (
          <Card
            key={item.name}
            logo={item.logo}
            name={item.name}
            description={item.description}
            isActive={item.isActive}
            setActive={()=> toggleActive(item.name)}
          />
        ))}
      </div>



    </div>
  )
}

export default App
