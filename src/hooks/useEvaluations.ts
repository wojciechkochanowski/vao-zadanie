import { useQuery } from 'react-query'
import { TEvaluation, TProject } from '../types/types'

export default function useEvaluations(userId?: number) {
  const { isLoading, data } = useQuery('evaluations', async () => {
    const evalRes = await fetch(`${process.env.REACT_APP_API_URL}/evaluations${userId ? `?userId=${userId}` : ''}`)
    let evals = await evalRes.json() as TEvaluation[]
    if(evals.length > 0){
      const projectIds = (evals).map(el => `id=${el.projectId}`)
      const projectRes = await fetch(`${process.env.REACT_APP_API_URL}/projects?${projectIds.join('&')}`)
      const projects = await projectRes.json() as TProject[]
      evals = evals.map(el => ({
        ...el,
        projectName: projects.find(p => p.id === el.projectId)?.name
      }))
    }
    return Promise.resolve(evals)
  })
  return { isLoading, evaluations: data as TEvaluation[] }
}
