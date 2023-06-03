import React from 'react'

export const CharacterCard = ({id, name, charName, photo}) => {
  return (
    <li>
        <h4>{name}</h4>
        <p>Character name: {charName}</p>
        <img height="250px" src={photo} alt={`${id}pic`} />
    </li>
  )
}
