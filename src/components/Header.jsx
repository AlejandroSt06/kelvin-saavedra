
import Icons from "./Icons";

const MoonIcon = Icons.Moon;
const SunIcon = Icons.Sun;
const InstaIcon = Icons.Instagram
const LinkedinIcon = Icons.Linkedin

import "../../public/css/header.css"
import { useState } from "react";

function Header(){

    

    const [isDark, setDark] = useState(true)


    

    const [coloreVariabile, setColoreVariabile] = useState('#ff0000'); // Valore iniziale

    const cambiaColore = () => {
        
          setDark(!isDark)
        // Genera un nuovo colore casuale (puoi personalizzare questa parte)
        // Light ----  Dark
        const nuovoColoreSfondo = isDark ? "#F9F7F7" : "#222831";
        const newNavLinkColor = isDark ? "#3F72AF" : "#EEEEEE";
        const newSvgColor = isDark ? "#394867" : "#FFD369";
        const newBgCard = isDark ? "#394867" : "#393E46";
        const newTextColor = isDark ? "212A3E" : "#EEEEEE"
        setColoreVariabile(nuovoColoreSfondo);
      
        // Applica il nuovo colore alla variabile CSS
        document.documentElement.style.setProperty('--main-color', nuovoColoreSfondo);
        document.documentElement.style.setProperty('--card-bg',newBgCard);
        document.documentElement.style.setProperty('--nav-link', newNavLinkColor);
        document.documentElement.style.setProperty('--svg-color', newSvgColor);
        document.documentElement.style.setProperty('--text-color', newTextColor);
    };

return(
<header>
    <a href = "#">
        <h2><span class="bold-heading">Kelvin</span> Saavedra</h2>
    </a>
    
    <nav>
        <ul>
            <li><a href="#">Works</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <button id = "changeThemeButton" onClick={cambiaColore}><MoonIcon/></button>
            <li><a href="#"><InstaIcon/></a></li>
            <li><a href="#"><LinkedinIcon/></a></li>
        </ul>
    </nav>
</header>
)}

export default Header



