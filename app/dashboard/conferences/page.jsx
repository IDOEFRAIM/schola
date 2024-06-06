import { useQuery } from '@tanstack/react-query'

const page = () => {
    const { data, isLoading, isError } = useQuery({
        queryFn: ()=> GlobalApi.getAllConf(),
        queryKey: ["conf"],
      });
      const {meeting} = data

  return (
    <div>
      hey
    </div>
  )
}

export default page
