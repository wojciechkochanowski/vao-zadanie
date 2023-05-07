import { useQuery } from 'react-query'
import { TProject } from '../types/types'

export default function useProjects() {
  const { isLoading, data } = useQuery('projects', async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/projects`)
    return res.json()
  })
  return { isLoading, projects: data as TProject[] }
}
