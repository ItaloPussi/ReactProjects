import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

const App = () => {
    const [adviceText, setAdviceText] = useState("")

    useEffect(()=>{
        fetchAdvice()
    }, [])

    const fetchAdvice = async() => {
        let response = await axios.get("https://api.adviceslip.com/advice")
        if(response.status!== 200) return
        let {advice} = response.data.slip
        setAdviceText(advice)
    }
    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{adviceText}</h1>
                <button onClick={fetchAdvice} className="button">
                    <span>GIVE ME ADVICE!</span>
                </button>
            </div>
        </div>
    )
}

export default App