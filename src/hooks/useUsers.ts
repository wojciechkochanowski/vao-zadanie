import { useEffect, useState } from 'react'
import { TUser } from '../types/types'
import { mockProjectUsers, mockUsers } from '../mock'

export default function useUsers(projectId?: number) {
  const [ users, setUsers ] = useState<TUser[]>([])
  useEffect(() => {
    if(projectId){
      const userIds = mockProjectUsers.filter(el => el.projectId === projectId).map(el => el.userId)
      setUsers(mockUsers.filter(user => userIds.includes(user.id)))
    } else {
      setUsers(mockUsers)
    }
  }, [projectId])
  return users
}
