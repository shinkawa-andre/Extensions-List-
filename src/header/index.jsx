import './index.scss'

function Header({onClick, dark}) {
  

  return (
    <>
      <div className='header'>
        <div className="extension">
          <img src={
            dark
              ? "../src/assets/images/logo.svg"
              : "../src/assets/images/logo.svg"
          } alt="Logo Extensions" className="logo" />
        </div>
        <div className="moon" onClick={onClick}>
          <img src={
            dark
              ? "../src/assets/images/icon-sun.svg"
              : "../src/assets/images/icon-moon.svg"
          } alt="icon moon" className="iconMoon" />
        </div>
      </div>
      
        
    </>
  )
}

export default Header