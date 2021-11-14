import React from 'react';
import styled from '@emotion/styled';


const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 8000px;

    @media (min-width: 992px){
        margin-top: 200px;
    }

    h1{
        font-family: Lucida casual;
        text-align: center;
        position: relative;
        padding-left: 4rem;
 
    }
    p{
        font-family: Lucida casual;
        font-size: 1.6rem;
        text-align: right;
        color: #666;
        margin-top: 1rem;
        margin-bottom: -1rem;
    }
    
`;

const Frase = ({frase}) => {

    if(Object.keys(frase).length === 0) return null;

    return (
        <ContenedorFrase>
        <h1>{frase.sqQuote}</h1>
            <p>By: {frase.sqWho}</p>
            <p>{frase.sqEp}</p>
            <p>Episode: {frase.sqId}</p>
        </ContenedorFrase>
    );
}

export default Frase;
