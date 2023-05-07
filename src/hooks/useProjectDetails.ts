import { useQuery } from 'react-query'

export default function useProjectDetails(id: string | undefined) {
  const { isLoading, data } = useQuery(['project_details', id], async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/projects?id=${id}`)
    return res.json()
  }, {
    select: data => data && data[0] || undefined
  })
  return { isLoading, project: data }
}
