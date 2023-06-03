import React, {useState} from 'react'
import '../App.css'

export const PeticionApi = () => {
    const [data, setData] = useState([]);

    const fetchData = async() => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            console.log(response)
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <>
            <h1>Peticion API React</h1>
            <p className="read-the-docs">
                Click the button to fetch the endpoint data
            </p>
            <div className="card">
                <button onClick={fetchData}>Fetch data</button>
            </div>
        </>
    )
}
