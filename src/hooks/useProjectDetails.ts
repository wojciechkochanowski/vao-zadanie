import { useQuery } from 'react-query'
import { TProject } from '../types/types'

export default function useProjectDetails(id: string | undefined) {
  const { isLoading, data } = useQuery(['project_details', id], async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/projects?id=${id}`)
    return res.json()
  })
  let project
  if(data)
    project = (data as TProject[])[0]
  return { isLoading, project }
}
