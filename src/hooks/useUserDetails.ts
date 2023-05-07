import { useQuery } from 'react-query'

export default function useUserDetails(id: string | undefined) {
  const { isLoading, data } = useQuery(['user_details', id], async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/users?id=${id}`)
    return res.json()
  }, {
    select: data => data && data[0] || undefined
  })
  return { isLoading, user: data }
}
