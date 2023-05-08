import { UseMutateFunction, useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { TCurrentUser, TLoginData } from "../types/types"
import { addAlert } from '../redux/alert'
import { setUser } from "../redux/authentication"

type TSignIn = UseMutateFunction<TCurrentUser, unknown, TLoginData, unknown>

async function signIn({ email, password, oauth }: TLoginData): Promise<TCurrentUser> {
  const fetchParams = oauth ? `?oauth=true&email=${email}` : `?oauth=false&email=${email}&password=${password}`
  const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${fetchParams}`, {
    method: 'GET',
  })
  if (!response.ok)
    throw new Error('Something went wrong', { cause: response })

  const users = await response.json()
  if(users && users.length > 0){
    return Promise.resolve(users[0])
  }
  return null
}

export function useSignIn(): TSignIn {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { mutate } = useMutation<TCurrentUser, unknown, TLoginData>(
    signIn, {
      onSuccess: (data) => {
        if(data){
          dispatch(addAlert({type: 'success', message: 'Zalogowano'}))
          dispatch(setUser(data))
          navigate('/')
        } else {
          dispatch(addAlert({type: 'error', message: 'Logowanie nieudane'}))
        }
      },
      onError: (error) => {
        dispatch(addAlert({type: 'error', message: 'Logowanie nieudane'}))
      }
    }
  )
  return mutate
}