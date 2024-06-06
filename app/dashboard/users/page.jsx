'use client'
import GlobalApi from '@/app/_services/GlobalApi'
import Table from '@/components/Table'
import { useQuery } from '@tanstack/react-query';
const page = () => {
    const { data, isPending, error } = useQuery({
        queryFn: async()=>await GlobalApi.getAllUsers(),
        queryKey: ["users"],
      });   
      // const {users}=data
      
    if (isPending){
        return(
            <div className="flex justify-center items-center">
                <h3 className="text-gray-600 text-2xl">Nous cherchons les utilisateurs</h3>
            </div>
        )
    }
    if (error) {
        console.log(error)
        //dont forget to reload
        return <p>une erreur est arrive</p>
    }
    const {users} = data
      const columnFields = [
        { field: "email" ,filter:true},
        { field: "username",filter:true },
        { field: "preference" ,filter:true},
        { field: "role",filter:true},
        { field: "createdAt" ,filter:true},
        { field: "updateAt" ,filter:true},
        { field: "password" ,filter:true}

      ]
  return (
    <>
      <h3>users</h3>
      <Table rowFields={users} columnFields={columnFields} />
      
    </>
  )
}

export default page
