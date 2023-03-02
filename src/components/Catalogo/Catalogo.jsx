import React from 'react'
import { mones } from "../../assets/mones";
import Card from './Card';

export default function Catalogo() {
  return (
    <div className='catalogo-container'>
        {mones.map((mon) =>(
            <Card mon={mon}/>
        ))}
    </div>
  )
}
