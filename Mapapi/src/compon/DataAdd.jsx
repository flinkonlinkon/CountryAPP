import React from 'react'

export default function DataAdd({add}) {
    console.log(add);
    
    // let {name,region,status,subregion,independent,population} = add
    
    
    
  return (
    <div>
        nnnn:{add.length}
        {
            add.map(x=><div className='w-14 flex gap-3'><img src={x.flags.png} alt="" /><p>{x.region}</p><button className='btn btn-error'>Remove</button></div>)
        }
      
    </div>
  )
}
