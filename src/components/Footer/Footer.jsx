import { Link } from "react-router-dom"

import "./footer.css"

const Footer = () =>{

    return (
<footer class="attribution primary-footer">

    <div className="container">
        <div className="primary-footer__content-wrapper grid">
            <p>Coded by <Link to="/" >Mujesia Nathaniel Maina</Link>.</p>
            <p>Challenge by <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</Link>. </p>
        </div>
    </div>
  </footer>
    )
}

export default Footer