import { useEffect, useState } from 'react'
import { TEvaluation } from '../types/types'
import { mockEvaluations, mockProjects } from '../mock'

export default function useEvaluations(userId?: number) {
  const [ evaluations, setEvaluations ] = useState<TEvaluation[]>([])
  useEffect(() => {
    let evaluations: TEvaluation[] = []
    if(userId){
      evaluations = mockEvaluations.filter(evaluation => evaluation.userId === userId)
    } else {
      evaluations = mockEvaluations
    }

    evaluations = evaluations.map(ev => ({
      ...ev,
      projectName: mockProjects.find(project => project.id === ev.projectId)?.name
    }))

    setEvaluations(evaluations)
  }, [userId])
  return evaluations
}
