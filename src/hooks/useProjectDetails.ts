import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useDispatch } from "react-redux"
import { TProject } from '../types/types'
import { addAlert } from '../redux/alert'

export default function useProjectDetails(id: string | undefined) {
  const { isLoading, data } = useQuery<TProject>(['project_details', id], async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/projects/${id}`)
    return res.json()
  })
  return { isLoading, project: data }
}

export function useSaveProjectDetails(){
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  return useMutation(async (project: TProject) => {
    let res: Response
    if(project.id){
      res = await fetch(`${process.env.REACT_APP_API_URL}/projects/${project.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project)
      })      
    } else {
      res = await fetch(`${process.env.REACT_APP_API_URL}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...project, id: undefined })
      })
    }
    return res.json()
  }, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['project_details', data.id + ''])
      dispatch(addAlert({type: 'success', message: 'Zapisano'}))
    }
  })
}