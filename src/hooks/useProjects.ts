import { useEffect, useState } from 'react'
import { TProject } from '../types/types'
import { mockProjects } from '../mock'

export default function useProjects() {
  const [ projects, setProjects ] = useState<TProject[]>([])
  useEffect(() => {
    setProjects(mockProjects)
  }, [])
  return projects
}
