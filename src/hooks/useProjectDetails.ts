import { useEffect, useState } from 'react'
import { FieldValues, UseFormReset } from 'react-hook-form'
import { TProject } from '../types/types'
import { mockProjects } from '../mock'

export default function useProjectDetails(id: string | undefined, reset: UseFormReset<FieldValues>) {
  const [ project, setProject ]  = useState<TProject>()
  useEffect(() => {
    if(id){
      const result = mockProjects.find(p => p.id === parseInt(id))
      setProject(result)
      reset(result)
    }
  }, [id, reset])
  return project
}
