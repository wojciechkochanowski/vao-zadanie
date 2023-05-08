import { useQuery, useMutation, useQueryClient } from 'react-query'
import { useDispatch } from "react-redux"
import { TUser } from '../types/types'
import { addAlert } from '../redux/alert'

export default function useUserDetails(id: string | undefined) {
  const { isLoading, data } = useQuery(['user_details', id], async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`)
    return res.json()
  })
  return { isLoading, user: data }
}

export function useSaveUserDetails(){
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  return useMutation(async (user: TUser) => {
    if(user.id){
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      return res.json()
    } else {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...user, id: undefined })
      })
      return res.json()
    }
  }, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['project_details', data.id + ''])
      dispatch(addAlert({type: 'success', message: 'Zapisano'}))
    }
  })
}
