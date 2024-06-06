'use client'

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import katex from 'katex'
import 'katex/dist/katex.css'
window.katex = katex;

const MathEditor = ({comment,setcomment})=> {
  const [value, setValue] = useState('');

  const modules = {
    toolbar:[
        [{'header':[1,2,false]}],
        ['bold','italique'],
        ['formula'],
        [{'list':'ordered'},{'list':'bullet'}],
        ['clean']
    ],
    formula:true
  }
  return (
    <div className='w-full m-[100px]'>
        <ReactQuill theme="snow" 
  value={value} onChange={(e)=>{
    setcomment(e)
    setValue(e)
    console.log(comment)
  }}
  modules={modules}
  formats={['header','bold','italic','underline','formula','list','bullet']} />;
    </div>
  )
}
export default MathEditor