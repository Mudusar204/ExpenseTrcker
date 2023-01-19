import { useState } from "react"
import {addDoc,collection} from 'firebase/firestore'
import { async } from "@firebase/util"
import { db } from "@/firebaseConfiguration/firebaseConfig"
const Practice=()=>{
    const [data,setData]=useState<string>('')
    const fun= async()=>{
        let newData={
disciption:data
        }
    const docRef=addDoc(collection(db,'data'),newData)
    console.log(data);
    setData('')
    
}
// console.log(data);
    return(
        <div>
<input onChange={(e)=>setData(e.target.value)} value={data} type="text"  />
<button onClick={fun}>add data</button>
        </div>
    )
}
export default Practice