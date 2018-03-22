import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Container from 'components/Container';

const CardWrapper = styled.div`
    box-shadow: 0 0.25em 0.5em 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &:hover {
         box-shadow: 0 0.5em 1em 0 rgba(0,0,0,0.2);
    }
`

const CardLink = styled(Link)`
    color: green;
    text-decoration: none;
`

const Img = styled.img`
    width: 100%;
    height: auto;
`

const Card = ({ to, img, content }) => (
    <CardWrapper>
        <CardLink to={to}>
            <Img src={img} />
            <Container>
                {content}
            </Container>
        </CardLink>
    </CardWrapper>
)

export default Card;
