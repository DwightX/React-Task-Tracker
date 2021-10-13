import { Link } from "react-router-dom"

const Footer = () =>{
    return(
        <footer className="bottomRow">
        <p>Copyright &copy; 2021</p>
        <Link to='/about'>YOURBIGBROTHER</Link>
        </footer>
    )
}
export default Footer