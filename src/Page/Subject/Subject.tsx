import { useState } from "react"
import data from "../../data/config.json"
import SubjectForm from "./SubjectForm.tsx"

const Subject = ()=>{
  const issubjectData = localStorage.getItem("SubjectData")
  const subjectData = issubjectData?JSON.parse(issubjectData):data.subjects

 const [subjects,setSubjects]  = useState(subjectData) 
 const [isFormActive,setFormActive] = useState(false)

 const handaleSumbitForm  = (subject)=>{
    const key = `${new Date().getUTCMilliseconds()} ${Math.random()*100}`
    setSubjects(prev=>[...prev,{...subject,id:key}])
    setFormActive(false)
    localStorage.setItem("SubjectData",JSON.stringify([...subjects,{...subject,id:key}]))
 }

return <div className="relative h-full min-h-96 ">
       { subjects.map((el)=>
            <div key={el.id} className="shadow text-xl text-center px-5 py-3 rounded-xl">{el.name}</div>)
       }

       <button onClick={()=>{
         setFormActive(prev=>!prev)  
       }} className="absolute font-bold text-xl top-full right-0  p-2 
       rounded-full bg-white border shadow  w-16 h-16 hover:bg-black/5  ">+</button>

       {isFormActive&&<SubjectForm handaleSumbitForm={handaleSumbitForm} />}
</div> 
}

export default Subject