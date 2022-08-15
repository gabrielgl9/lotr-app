import React from 'react'

type Textfield = {
  type: string
  name: string
  value: string
  label?: string
  placeholder?: string
  autoComplete?: string
  handleChange: (event: any) => void
}

export default function Textfield({
  type,
  name,
  value,
  label = '',
  placeholder = '',
  autoComplete = 'off',
  handleChange,
}: Textfield) {
  const uniqueId = crypto.randomUUID()

  return (
    <div>
      {label && <label htmlFor={uniqueId}> {label} </label>}
      <input
        type={type}
        id={uniqueId}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete={autoComplete}
      />
    </div>
  )
}
