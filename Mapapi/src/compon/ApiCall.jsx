import React, { useEffect, useState } from 'react'
import RecevDataDiv from './RecevDataDiv'
import DataAdd from './DataAdd'


export default function ApiCall() {
    let [data,setData] = useState([])
    useEffect(()=>{
        async function Api(){
            let api = await fetch('https://restcountries.com/v3.1/all')
            let Apidata = await api.json()
            setData(Apidata)
            
        }
        Api()
            
    },[])
    let [add, setAdd]= useState([])

    function btncall(x){
        // console.log(x);
        
        let nw = [...add,x]
        setAdd(nw)
        
        
    }
  return (
    
    <div>
        <DataAdd  add={add}></DataAdd>

      {
        data.map(data=> <RecevDataDiv data={data} btncall={btncall} add={add}></RecevDataDiv>)
            
      }
      {/* <RecevDataDiv data={data}></RecevDataDiv> */}
    </div>
  )
}
