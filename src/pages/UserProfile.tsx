import { useParams } from 'react-router-dom'

export default function UserProfile() {
  const { userId } = useParams()
  return (
    <div>
      user: {userId}
    </div>
  )
}
