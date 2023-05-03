import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google'
import Layout from './components/layout'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Users from "./pages/Users"
import NotFound from "./pages/NotFound"

function App() {
  if (typeof process.env.REACT_APP_CLIENT_ID === 'undefined'){
    return (<div>google client id not configured</div>)
  }
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
