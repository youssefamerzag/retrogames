import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
export default function app() {
    const consoles = 
    {co1 : "Nintendo New 3ds",
     co2 : "Nintendo Switch Oled",
     co3 : "Playstation 5 ",
     co4 : "Xbox Series X",
     con1 : "Wii U",
     con2 : "GameBoy Micro",
     cos1 : "Playstation 4",
     cos2 : "PS VITA ",
     cos3 : "PSP",
     cor1 : "GameBoy",
     cor2 : "Nintendo Dsi",
     cor3 : "SNES",
     cor4 : "Nintendo 64"}

    return (
        <div>
        <Header></Header>
        <Home console={consoles}></Home>
        </div>

    )
}