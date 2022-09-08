import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"


export default function App() {


    const [darkMode, setDarkMode] = React.useState(false) 


    function toggleDarkMode(){

        setDarkMode(prevMode => !prevMode)

    }



    return (
        <div className="container">
            <Navbar 
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode} 
            />
            <Main 
                darkMode={darkMode} 
            />
        </div>
    )
}