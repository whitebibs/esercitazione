import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/todos">Todos</Link>
    </nav>
    </>
    
  )
}
