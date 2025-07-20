import React, { useState } from 'react';
import "./Home.css";
import EmojiButton from '../../EmojiButton/EmojiButton';
import ColorButton from '../../ColorButton/ColorButton';
import imgRotate from "/rotate-img.png";

function Home() {
  const [emoji, setEmoji] = useState('🌄');
  const [sliderValue, setSliderValue] = useState("50");
  const [color, setColor] = useState("#ffffcc");
  const [angle, setAngle] = useState(0);

  return (
    <div className="min-h-screen w-full bg-white relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
      `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />
      <div className='header-container relative z-10'>
        <h1 className='header'>Playing with emojis using <span className='header-highlight'>useState</span></h1>
        <p className='app-description'>This is a simple React App that demonstrates how to use the useState hook to manage state in a functional component.</p>
      </div>
      <div className='emoji-container' style={{ fontSize: `${sliderValue}px`, backgroundColor : color }}>
        <span style={{transform:`rotate(${angle}deg)`}} className='emoji'>{emoji}</span>
      </div>
      <div className='slider_container'>
        {sliderValue}
        <input type="range" className='slider' min={0} max={100} onChange={(e) => {setSliderValue(e.target.value); }}
          value={sliderValue} />
      </div>
      <div className='angle-container'>
        <img src="rotate-img.png" alt="rotste-img" height={"40px"} width={"40px"} className='imgRotate'
        onClick={() => {setAngle(angle + 45)}}/>
      </div>
      <div className='emoji-picker'>
        <EmojiButton emoji={("🌄")} setEmoji={setEmoji} />
        <EmojiButton emoji={("❤️")} setEmoji={setEmoji} />
        <EmojiButton emoji={("📱")} setEmoji={setEmoji} />
        <EmojiButton emoji={("😍")} setEmoji={setEmoji} />
        <EmojiButton emoji={("🙋‍♂️")} setEmoji={setEmoji} />
        <EmojiButton emoji={("😊")} setEmoji={setEmoji} />
        <EmojiButton emoji={("😘")} setEmoji={setEmoji} />
        <EmojiButton emoji={("👌")} setEmoji={setEmoji} />
        <EmojiButton emoji={("👀")} setEmoji={setEmoji} />
        <EmojiButton emoji={("😁")} setEmoji={setEmoji} />
      </div>
      <div className='color-picker'>
        <ColorButton color={"#99ffcc"} setColor={setColor}/>
        <ColorButton color={"#00ffff"} setColor={setColor}/>
        <ColorButton color={"#ff6600"} setColor={setColor}/>
        <ColorButton color={"#33cc33"} setColor={setColor}/>
        <ColorButton color={"#0000ff"} setColor={setColor}/><br />
        <ColorButton color={"#003366"} setColor={setColor}/>
        <ColorButton color={"#80bfff"} setColor={setColor}/>
        <ColorButton color={'#cc33ff'} setColor={setColor}/>
        <ColorButton color={"#ffff00"} setColor={setColor}/>
        <ColorButton color={"#ffcccc"} setColor={setColor}/>
      </div>
    </div>
  )
}
export default Home;