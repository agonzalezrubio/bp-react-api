import React, {useState, useEffect} from 'react'
import '../App.css'
import { CharacterCard } from './CharacterCard';

export const PeticionApi = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    
    const fetchData = async () => {
        try {
            const response = await fetch(`https://big-bang-theory-api.lesalvucci.workers.dev/all?page=${pageNumber}`);
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

    useEffect(() => {
        fetchData();
    }, [pageNumber]);

    const handlePreviousPageClick = () => {
        if (pageNumber > 1) setPageNumber(pageNumber - 1);
    }

    const handleNextPageClick = () => {
        if (pageNumber < data.pages) setPageNumber(pageNumber + 1);
    }

    if (loading) return <p>Loading data...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <h1 style={{marginBottom: '0.2em'}}>Peticion API React</h1>
            <p className="read-the-docs">
                Click the button to fetch the endpoint data
            </p>
            
            <div style={{marginTop: '1em'}}>
                <button onClick={handlePreviousPageClick} style={{marginRight: '1em'}}>Previous page</button>
                <button onClick={handleNextPageClick}>Next page</button>
            </div>

            <div style={{marginTop: '2em'}} className="card">
                <ul style={{listStyleType: 'none'}}>
                    {data.items.map((item) => (
                        <CharacterCard key={item.id} {...item}/>
                    ))}
                </ul>
            </div>
        </>
    )
}
