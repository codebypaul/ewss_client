import styled from 'styled-components'
// components
import {ProgressBar} from 'react-bootstrap'


export default function StudentCard(props) {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    const now = props.now
    const progressInstance = <ProgressBar striped variant='success' now={now} label={`${now}%`} />
    return (
        <CardWrapper>
            <h4 className='text-left text-white'>Student Name</h4>
            <div className="student-card">
                <div className="row m-0">
                    <h5>Last Achievement - Date</h5>
                    <p className='text-left'>{lorem}</p>
                </div>
                <div className="row m-0">
                    <h6>Lessons in Package</h6>
                    <div className="container">
                        {progressInstance}

                    </div>
                </div>
            </div>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    width: 100%;
    padding: 2rem 5rem;
    .student-card {
        padding: 3rem;
        border-radius: .5rem;
        background: rgba(200,200,200,.5);
    }
`