import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google'
import { useSelector } from 'react-redux'
import Layout from './components/layout'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Users from "./pages/Users"
import NotFound from "./pages/NotFound"
import UserProfile from "./pages/UserProfile"
import ProjectDetails from "./pages/ProjectDetails"
import Login from "./pages/Login"
import { RootState } from './redux/store'
import { TCurrentUser } from "./types/types"

function App() {  
  const user = useSelector((state: RootState) => state.auth)
  if (typeof process.env.REACT_APP_CLIENT_ID === 'undefined'){
    return (<div>google client id not configured</div>)
  }

  const ProtectedRoute = ({ user }: {user: TCurrentUser}) => {
    if (!user) {
      return <Navigate to="/login" replace />
    }
    return <Outlet/>
  }

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />            
            <Route path="login" element={<Login />} />
            <Route element={<ProtectedRoute user={user}/>}>
              <Route path="projects" element={<Projects />} />
              <Route path="users" element={<Users />} />
              <Route path="user/:userId" element={<UserProfile />} />
              <Route path="project/:projectId" element={<ProjectDetails />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
