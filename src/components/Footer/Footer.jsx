import { Link } from "react-router-dom"

const Footer = () =>{

    return (
<footer class="attribution">

    <div className="container">
        <div className="primary-footer-content">
            <p>Challenge by <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</Link>. </p>
            <p>Coded by <Link to="/" >Mujesia Nathaniel Maina</Link>.</p>
        </div>
    </div>
  </footer>
    )
}

export default Footer