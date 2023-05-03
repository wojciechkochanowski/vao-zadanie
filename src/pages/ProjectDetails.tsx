import { useParams } from 'react-router-dom'

export default function ProjectDetails() {
  const { projectId } = useParams()
  return (
    <div>
      project: {projectId}
    </div>
  )
}
