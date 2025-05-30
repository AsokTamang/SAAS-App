import { fetchCompanion } from "@/lib/actions/companion.action"
const Page =async({id}:{id:string}) => {
    
    const fetchedData=await fetchCompanion(id)
  return (
    <div>
        fetchedData.name
      
    </div>
  )
}

export default Page
