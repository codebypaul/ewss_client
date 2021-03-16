import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
// components
import StudentCard from '../components/StudentCard'

export default function Profile(props) {
    console.log(props);
    const userData = props.user ? 
    (<ProfilePage>
        <div className="row m-0 student-info-cards">
            <StudentCard/>
        </div>
        <div className="row m-0 d-flex flex-column align-items-center">
            <button className="btn btn-primary">Review Notes</button>
            <button className="btn btn-primary">Goal Request</button>
            <button className='btn btn-primary'>Purchase more lessons</button>
        </div>
    </ProfilePage>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div>
            { props.user ? userData : errorDiv() }
        </div>
    );

}

const ProfilePage = styled.div`
    .student-info-cards {
        display: flex;
        justify-content: center;
        padding: 4rem 0 8rem 0;
        background: black;
    }

    button {
        width: 25%;
        margin: 1rem 0;
    }
`