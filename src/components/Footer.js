import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterWrapper>
            <div className="row m-0 text-center">
                <div className="col-md-4">Help</div>
                <div className="col-md-4">About</div>
                <div className="col-md-4">Legal</div>
            </div>
            <div className="container text-center">
                <span className="text-muted">@2021 Eastern Waters Swim School</span>
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    background: black;
    color: white;
`