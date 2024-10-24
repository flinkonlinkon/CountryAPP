import React, { useEffect, useState } from 'react'

export default function Sac() {
    let [inApi,setInApi]=useState([])
    let [inputs, setInputs]=useState('')
    useEffect(()=>{
        async function innnput() {
            let data = await fetch('https://restcountries.com/v3.1/name/{inputs}')
            let nwdata = await data.json()
            setInApi(nwdata)
        }
    },[])
    useEffect(()=>{
        document.addEventListener('keyup',sacInput)

    },[])
    function sacInput(x){
        
console.log(x.target.value);

        
    }
    
  return (
    <div>
      <input type="text" placeholder='tttttttttttt' /> <button onClick={sacInput} className='btn'>sac</button>
      
    </div>
  )
}
