import { useState } from "react"

const SubjectForm  = ({handaleSumbitForm}) =>{

const [subjectName,setSubjectName]  = useState("")

const handaleformSubmit = (e)=>{
     e.preventDefault()
     handaleSumbitForm({name:subjectName})
}

return <div onSubmit={handaleformSubmit} className="h-full top-0 absolute p-8 z-40 w-full bg-black/10 flex justify-center  items-center">
    <form className="w-full bg-white  p-2 h-80 rounded flex justify-center flex-col items-center ">
          <h4 className="my-2 font-bold ">New Subject</h4>
          <div>
            <input required className="border px-4 py-2 border-blue-400 rounded"  value={subjectName} onChange={(e)=>setSubjectName(prev=>(e.target.value))} />
             <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded block mx-auto mt-4 ">Submit</button>
          </div>
    </form>
</div>
}

export default SubjectForm
