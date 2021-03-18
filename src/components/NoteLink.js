import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function NoteLink() {
    return (
        <NoteWrapper>
            <Link to='/notes' className='w-100'>
                <div className="note-area">
                    <div className="row m-0">
                        <h6>01/01/2021</h6>
                    </div>
                </div>
            </Link>
        </NoteWrapper>
    )
}

const NoteWrapper = styled.div`
    background: grey;
    color: white;
    transition: .5s linear all;
    &:hover {
        background: rgba(200,200,200,1);
    }
    .note-area {
        padding: 2rem;
    }
`