import React from 'react'


export default function RecevDataDiv({data,btncall,add}) {
    let {name,region,status,subregion,independent,population} = data
    
  return (
    <div>
     <div className='border rounded-lg mb-4'>
        <img className='my-auto' src={data.flags.png} alt="" />
        Country:{region}
        <br />
     population:{population}
     <button onClick={()=>btncall(data)} className='btn'>Add me</button>
     </div>
    </div>
  )
}
