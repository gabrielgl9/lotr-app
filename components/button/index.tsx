import React from 'react'

type Button = {
  type: 'submit' | 'reset' | 'button' | undefined
  text: string
  disabled?: boolean
  clickButton?: () => void
}

export default function Button({ text, type, disabled, clickButton }: Button) {
  return (
    <div>
      <button type={type} disabled={disabled} onClick={clickButton}>
        {text}
      </button>
    </div>
  )
}
