import "./ColorButton.css"

function ColorButton({color, setColor}) {
  return (
   
    <div className='color-option'
        onClick={() => {setColor(color);}}
        style ={{backgroundColor : color}}>
    </div>
  )
}

export default ColorButton;