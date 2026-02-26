import { useEffect } from "react"
import { useNavigate } from "react-router";



export default function Dashboard() {
  const navigate = useNavigate()
  const CurrentUser = localStorage.getItem('currentUser')

  useEffect(() => {
    if (!CurrentUser) {
      navigate('/login')
    }
  }, [])
  
  return (
    <div>
      <h1>Панель управления, {CurrentUser}</h1>
    </div>
  )
}