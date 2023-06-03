import React, {useState} from 'react'
import '../App.css'

export const PeticionApi = () => {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const fetchData = async() => {
        try {
            const response = await fetch(`https://futdb.app/api/clubs?page=${pageNumber}`, { 
                method: 'GET', 
                headers: { 'X-Auth-Token': 'a57318c0-467b-4c2e-b761-24d8b1347ddb' }
            });

            if (response.status == 200) {
                const json = await response.json();
                const data = await json.items;
                setData(data)
            } else {
                console.log('Error al obtener datos')
            }
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
