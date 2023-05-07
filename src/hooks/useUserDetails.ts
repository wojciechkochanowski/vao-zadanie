import { useQuery } from 'react-query'
import { TUser } from '../types/types'

export default function useUserDetails(id: string | undefined) {
  const { isLoading, data } = useQuery(['user_details', id], async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users?id=${id}`)
    return res.json()
  })
  let user
  if(data)
    user = (data as TUser[])[0]
  return { isLoading, user }
}
