import { GoogleOAuthProvider } from '@react-oauth/google'
import Login from './components/authentication/Login'

function App() {
  if (typeof process.env.REACT_APP_CLIENT_ID === 'undefined'){
    return (<div>google client id not configured</div>)
  }
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <div className="App">
        <Login/>
      </div>
    </GoogleOAuthProvider>
  )
}

export default App;
