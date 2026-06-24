
import Header from './header';
import Filter from './filter';
import data from './data/data.json'
import './App.scss'
import './styles/theme.scss'
import Card from './card';
import { useState } from 'react';

function App() {
  const [cards, setCards] = useState(data);
  const [filter, setFilter] = useState("all");
  const [dark, setDark] = useState(false);

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

  function remove(name){
    setCards(prevRemove => prevRemove.filter(remove => remove.name !== name))
  }



  return (
    <div className={dark ? 'container dark' : 'container'}>
      <Header 
        onClick={()=>setDark(!dark)}
        dark={dark}
      />
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
            onClick={() => remove(item.name)}
          />
        ))}
      </div>



    </div>
  )
}

export default App
