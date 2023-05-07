import { useQuery } from 'react-query'
import { TProjectUser, TUser } from '../types/types'

export default function useUsers(projectId?: number) {
  const { isLoading, data } = useQuery('users', async () => {
    let res: Response
    if(projectId){
      const u2pRes = await fetch(`${process.env.REACT_APP_API_URL}/user_to_project?projectId=${projectId}`)
      const userIds = (await u2pRes.json() as TProjectUser[]).map(el => `id=${el.userId}`)
      if(userIds.length === 0){
        return Promise.resolve([])
      }
      res = await fetch(`${process.env.REACT_APP_API_URL}/users?${userIds.join('&')}`)
    } else {
      res = await fetch(`${process.env.REACT_APP_API_URL}/users`)
    }
    return res.json()
  })
  return { isLoading, users: data as TUser[] }
}
