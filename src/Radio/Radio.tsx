import React from 'react'
export default function Radio(props: IRadio) {
  const { labelPosition = 'right', id, name, label, checked, onChange } = props

  return (
    <div className='inline-flex items-center'>
      {labelPosition === 'left' && (
        <label className='pr-3 cursor-pointer' htmlFor={id}>
          {label}
        </label>
      )}

      <input
        type='radio'
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className='alice-radio appearance-none h-6 w-6 rounded-full bg-transparent border border-indigo-600 cursor-pointer checked:border-8'
      />

      {labelPosition === 'right' && (
        <label className='pl-3 cursor-pointer' htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  )
}

export interface IRadio {
  label?: React.ReactNode
  id: string
  name: string
  labelPosition?: 'left' | 'right'
  onChange?: () => void
  checked?: boolean
}
