import { Form } from 'react-bootstrap'
import styled from 'styled-components'
import {useState} from 'react'

export default function Pricing() {
    const checkBtn = () => {
        console.log('click')
    }
    return (
        <PricingWrapper>
            <h1>Pricing</h1>
            <div className="container-fluid py-5 pricing-cards">
                <div className="pricing-card" id='single'>
                    <h2>Single</h2>
                    <button className="more-info btn btn-light" onClick={checkBtn}>More Info</button>
                </div>
                <div className="pricing-card" id='four-pack'>
                    <h2>4 Pack</h2>
                    <button className="more-info btn btn-light" onClick={checkBtn}>More Info</button>
                </div>
                <div className="pricing-card" id='eight-pack'>
                    <h2>8 Pack</h2>
                    <button className="more-info btn btn-light" onClick={checkBtn}>More Info</button>
                </div>
                <div className="pricing-card" id='group'>
                    <h2>Group</h2>
                    <button className="more-info btn btn-light" onClick={checkBtn}>More Info</button>
                    
                </div>
            </div>
        </PricingWrapper>
    )
}

const PricingWrapper = styled.div`
    .pricing-cards {
        display: flex;
        justify-content: center;
    }
    .pricing-card {
        border: 1px solid black;
        border-radius: .5rem;
        width: 20%;
        transition: .3s linear all;
    }
    .pricing-card:hover {
        transform: scale(1.5);
    }
    #single {
        background: red;
    }
    #four-pack {
        background: blue;
    }
    #eight-pack {
        background: purple;
    }
    #group {
        background: green;
    }
`