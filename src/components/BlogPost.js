import styled from 'styled-components'

export default function BlogPost(props) {
    return (
        <div className='container mb-5'>
            <h2>{props.title}</h2>
            <span>{props.date}</span>
            <p className='pb-3'>{props.body}</p>
            <hr/>
        </div>
    )
}