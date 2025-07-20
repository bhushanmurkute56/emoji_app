import React from 'react'
import "./EmojiButton.css"

function EmojiButton({emoji, setEmoji}) {

  return (
    <div className='emoji-option'
     onClick={() => {setEmoji(emoji)}}> {emoji}
    </div>
  )
}

export default EmojiButton;