import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="text-white mt-5 myFooter">
            <Container>
                <Row className="py-3">
                    <Col>
                        <p className="small my-3 text-center">© 2020 WISHLIST LAB | <Link className="text-white" to="/terms-and-conditions">Terms and conditions</Link> | <Link className="text-white" to="privacy-statement">Privacy statement</Link></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
