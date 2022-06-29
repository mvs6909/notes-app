import React from "react";

const date = new Date();
var year = date.getFullYear();

function Footer(){
    return <footer>Copyright @ {year}</footer>
}

export default Footer;