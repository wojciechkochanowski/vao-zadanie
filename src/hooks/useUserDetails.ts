import { useEffect, useState } from 'react'
import { FieldValues, UseFormReset } from 'react-hook-form'
import { TUser } from '../types/types'
import { mockUsers } from '../mock'

export default function useUserDetails(id: string | undefined, reset: UseFormReset<FieldValues>) {
  const [ user, setUser ]  = useState<TUser>()
  useEffect(() => {
    if(id){
      const result = mockUsers.find(p => p.id === parseInt(id))
      setUser(result)
      reset(result)
    }
  }, [id, reset])
  return user
}
