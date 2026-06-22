import './index.scss'
import Toggle from './Toggle'
//import data from '../data/data.json'

function Card(props) {
    return (
        <div className='card'>
            
                
                    <div className="cardContent">
                        <img src={props.logo} alt={props.name} className="img" />
                        <div className="content">
                            <h3>{props.name}</h3>
                            <p>{props.description}</p>
                        </div>
                    </div>
                    <div className="btnCard">
                        <button id='removeBtn' onClick={props.onClick}>Remove</button>
                        <Toggle
                            active={props.isActive}
                            setActive={props.setActive}
                        />
                    </div>
                
            


        </div>
    )
}

export default Card