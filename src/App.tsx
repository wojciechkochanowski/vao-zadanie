import { GoogleOAuthProvider } from '@react-oauth/google'
import Layout from './components/layout'

function App() {
  if (typeof process.env.REACT_APP_CLIENT_ID === 'undefined'){
    return (<div>google client id not configured</div>)
  }
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <Layout>
        <div></div>
      </Layout>
    </GoogleOAuthProvider>
  )
}

export default App;
