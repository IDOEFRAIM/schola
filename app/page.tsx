'use client'
import React, { useState } from 'react'
import { addStyles, EditableMathField } from 'react-mathquill'
import 'react-quill/dist/quill.snow.css';
// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles()

const EditableMathExample = () => {
  const [latex, setLatex] = useState('\\frac{a}{\\sqrt{b}}\\cdot 2')
  const [value, setValue] = useState('')
  return (
    <div>
      <EditableMathField
        latex={latex}
        onChange={(mathField) => {
          setLatex(mathField.latex())
        }}
      />
      <p>{latex}</p>
    </div>
  )
}
export default EditableMathExample