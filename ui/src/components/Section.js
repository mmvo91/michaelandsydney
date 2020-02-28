import React from 'react';
import Container from "react-bootstrap/Container";

const Section = props => {
    return (
        <Container fluid className={props.className + " py-4 section-bg"}>
            <Container id={props.id}>
                {props.children}
            </Container>
        </Container>
    )
};

export default Section