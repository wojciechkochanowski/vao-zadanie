import { CredentialResponse, GoogleLogin } from "@react-oauth/google"

export default function Login() {
  const onSuccess = (responce: CredentialResponse) => {

  }
  
  const onError = () => {

  }
  
  return (
    <div id="logInButton">
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
      />
    </div>
  )
}
