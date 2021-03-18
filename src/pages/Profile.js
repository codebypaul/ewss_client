import {useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {Carousel} from 'react-bootstrap'
// components
import StudentCard from '../components/StudentCard'
import NoteLink from '../components/NoteLink'


export default function Profile(props) {
    const [purchaseOpen, setPurchaseOpen] = useState(false)
    const [notesOpen, setNotesOpen] = useState(true)
    const [goalOpen, setGoalOpen] = useState(false)

    const openPurchase = () => {
        if (!purchaseOpen) {
            setPurchaseOpen(true)
        } else {
            setPurchaseOpen(false)
        }
        console.log('purchase',purchaseOpen)
    }

    const openGoal = () => {
        if (!goalOpen) {
            setGoalOpen(true)
        } else {
            setGoalOpen(false)
        }
        console.log('goal',goalOpen)
    }

    const openNotes = () => {
        if (notesOpen) {
            setNotesOpen(false)
        } else {
            setNotesOpen(true)
        }
        console.log('note',notesOpen)
    }
    const userData = props.user ? 
    (<ProfilePage>
        <div className="container-fluid student-info-cards">
            <Carousel interval={null}>
                <Carousel.Item>
                    <StudentCard now={25}/>
                </Carousel.Item>
                <Carousel.Item>
                    <StudentCard now={75}/>
                </Carousel.Item>
                <Carousel.Item>
                    <StudentCard now={50}/>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className="row m-0 review-goal-purchase-row">
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center btn-options bg-dark">
                <button className="btn btn-primary" onClick={openNotes}>Review Notes</button>
                <button className="btn btn-primary" onClick={openGoal}>Goal Request</button>
                <button className="btn btn-primary" onClick={openPurchase}>Purchase more lessons</button>
            </div>
            <div className="col-md-6 px-0 bg-primary options-container">
                <NoteLink/>
                <NoteLink/>
                <NoteLink/>
                <NoteLink/>
            </div>
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
        overflow-x: scroll;
        width: 100vw;
    }
    .test-card {
        background: white;
        width: 500px;
        height: 200px;
        margin: 0 2rem;
    }
    button {
        width: 50%;
        margin: 1rem 0;
    }

    .btn-options {
        height:20rem;
    }

    .options-container {
        height: 20rem;
        overflow-y: scroll;
    }
`