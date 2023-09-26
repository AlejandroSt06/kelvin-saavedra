
import Icons from "./Icons";
const HamburgerButton = Icons.HamburgerButton
const MoonIcon = Icons.Moon;
const SunIcon = Icons.Sun;
const InstaIcon = Icons.Instagram
const LinkedinIcon = Icons.Linkedin

import "../../public/css/header.css"
import { useState } from "react";

function Header(){

    

    const [isDark, setDark] = useState(true)

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };


    

    const [coloreVariabile, setColoreVariabile] = useState('#ff0000'); // Valore iniziale

    const cambiaColore = () => {
        
          setDark(!isDark)
        // Genera un nuovo colore casuale (puoi personalizzare questa parte)
        // Light ----  Dark
        const nuovoColoreSfondo = isDark ? "#F9F7F7" : "#222831";
        const newNavLinkColor = isDark ? "#3F72AF" : "#EEEEEE";
        const newSvgColor = isDark ? "#394867" : "#FFD369";
        const newBgCard = isDark ? "#394867" : "#393E46";
        const newTextColor = isDark ? "#212A3E" : "#EEEEEE";
        const newBgButton = isDark ? "#3F72AF" : "#FFD369";
        setColoreVariabile(nuovoColoreSfondo);
      
        // Applica il nuovo colore alla variabile CSS
        document.documentElement.style.setProperty('--main-color', nuovoColoreSfondo);
        document.documentElement.style.setProperty('--card-bg',newBgCard);
        document.documentElement.style.setProperty('--nav-link', newNavLinkColor);
        document.documentElement.style.setProperty('--svg-color', newSvgColor);
        document.documentElement.style.setProperty('--text-color', newTextColor);
        document.documentElement.style.setProperty('--bg-button', newBgButton);
    };

return(
<header>
    <a href = "/">
        <h2 className="header-h2"><span class="bold-heading">Kelvin</span> Saavedra</h2>
    </a>
    
    <nav className={`menu pt-3 ${menuOpen ? 'open' : ''}`}>
        <ul>
            <li><a href="/">Works</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            {/* <button id = "changeThemeButton" onClick={cambiaColore}><MoonIcon/></button> */}
            <li><a href="#"><InstaIcon/></a></li>
            <li><a href="#"><LinkedinIcon/></a></li>
        </ul>
        
    </nav>
    <HamburgerButton isOpen={menuOpen} toggleMenu={toggleMenu} />
</header>
)}

export default Header



