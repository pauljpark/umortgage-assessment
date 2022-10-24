import logo from "../assets/logo.webp"
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"

function Navbar() {
    return (
        <nav>
            <div className="social-bar">
                <div className="social-logos-container">
                    <a target="_blank" href="https://www.facebook.com/umortgageteam/"><img className="fb-logo" src={facebook} alt='facebook' /></a>
                    <a target="_blank" href="https://twitter.com/umortgaget"><img className="social-logos" src={twitter} alt='twitter' /></a>
                    <a target="_blank" href="https://www.instagram.com/umortgage_team/?hl=en"><img className="social-logos" src={instagram} alt='instagram' /></a>
                    <a target="_blank" href="https://www.linkedin.com/company/umteam/"><img className="social-logos" src={linkedin} alt='linkedin' /></a>
                </div>
            </div>
            <div className="main-bar">
                <a href="https://umortgage.com/"><img className="logo" src={logo} /></a>
                <ul>
                    <li>WHY UMORTGAGE?</li>
                    <li>WHAT'S YOUR BUDGET?</li>
                    <li>SHOULD YOU REFINANCE?</li>
                    <li>CAREERS</li>
                </ul>
                <button className="apply-btn">APPLY NOW</button>
            </div>
        </nav>
    )
}

export default Navbar
