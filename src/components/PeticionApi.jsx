import React, {useState, useEffect} from 'react'
import '../App.css'

export const PeticionApi = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://futdb.app/api/clubs?page=${pageNumber}`, { 
                    method: 'GET', 
                    headers: { 'X-Auth-Token': 'a57318c0-467b-4c2e-b761-24d8b1347ddb' }
                });
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData);
                } else {
                    setError('Error al obtener los datos');
                }
            } catch (error) {
                setError('Error al obtener los datos: ' + error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p>Loading data...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <h1>Peticion API React</h1>
            <p className="read-the-docs">
                Click the button to fetch the endpoint data
            </p>
            <div className="card">
                {/* <button onClick={fetchData}>Fetch data</button> */}
            </div>
        </>
    )
}
