import React from 'react';
import styled from 'styled-components'
import ContactForm from '../components/ContactForm'


export default function Welcome() {
    return (
        <HomePage>
            <div className="background-image">

            </div>
            <div className="visual-container">
                This is Eastern Waters Swim School
            </div>
            <ContactForm/>
        </HomePage>
    )
}

const HomePage = styled.div`

`