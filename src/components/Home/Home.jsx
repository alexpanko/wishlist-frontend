import React from 'react'
import { Jumbotron, Container, Row, Col, CardColumns, Card } from 'react-bootstrap';
import "./Home.css";
import { HashLink as Link } from 'react-router-hash-link';

export default function Home() {
    return (
        <div>
            {/* HERO */}
            <Jumbotron fluid className="myHero pb-1" style={{backgroundImage: "linear-gradient(to top, rgb(0, 0, 0, 0.7), rgba(253, 203, 110, 0)50%), url(/images/home_hero.jpg)"}}>
                <Container>
                    <h1 className="display-3 text-light font-weight-bold myHeroTitle">Make a <span className="myOrange">wish</span></h1>
                    <h2 className="text-light">Make lists for all your wishes and shopping needs</h2>
                    <p className="text-center display-4 py-1"><Link smooth to="#sectionOne"><i className="fas fa-arrow-circle-down myOrange"></i></Link></p>
                </Container>
            </Jumbotron>

            {/* SECTION ONE */}
            <Container className="py-3" id="sectionOne">
                <Row>
                    <Col md className="mt-4">
                        <div className="text-center"><i className="fas fa-list-alt display-3 mb-4 myOrange"></i></div>
                        <div><p className="h4 text-center"><span className="font-weight-bold">Make</span> wish lists for different ocasions like travel, wedding, baby, gifts and ay others</p></div>
                    </Col>
                    <Col md className="mt-4">
                        <div className="text-center"><i className="fas fa-bookmark display-3 mb-4 myOrange"></i></div>
                        <div><p className="h4 text-center"><span className="font-weight-bold">Collect</span> products you want to buy, places to visit, gifts to get and links to your favorite stores.</p></div>
                    </Col>
                    <Col md className="mt-4">
                        <div className="text-center"><i className="fas fa-share-square display-3 mb-4 myOrange"></i></div>
                        <div><p className="h4 text-center"><span className="font-weight-bold">Share</span> with your partner and friends. Dream and plan together and get the gifts you reaally want.</p></div>
                    </Col>
                </Row>
            </Container>

            {/* SECTION TWO: SIGNUP AND LOGIN */}
            <Container fluid className="my-5 py-3 myConfettiBackground">
                <Row>
                    <Col>
                        <div className="text-center my-5">
                            <Link className="btn btn-primary btn-lg m-3 myWidth-300" to="/signup">Signup for free</Link>
                            <Link className="btn btn-info btn-lg m-3 myWidth-300" to="/login">Already a user? Login here</Link>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* SECTION THREE: INSPIRE */}
            <Container className="py-3">
                <Row>
                    <Col>
                        <div className="text-center mb-3">
                            <h1 className="myOrange">Ideas for your inspiration</h1>
                        </div>
                        <CardColumns>

                            <Card>
                                <Card.Img variant="top" src="/images/home_travel.jpg" />
                                <Card.Body>
                                <Card.Title>Ideas for summer holiday</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link className="btn btn-primary" to="/signup">Try it yourself</Link>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Img variant="top" src="/images/home_newborn.jpg" />
                                <Card.Body>
                                <Card.Title>New born essentials</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link className="btn btn-primary" to="/signup">Try it yourself</Link>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Img variant="top" src="/images/home_wedding.jpg" />
                                <Card.Body>
                                <Card.Title>Wedding gifts</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link className="btn btn-primary" to="/signup">Try it yourself</Link>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Img variant="top" src="/images/home_birthday.jpg" />
                                <Card.Body>
                                <Card.Title>Emma's birthday</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link className="btn btn-primary" to="/signup">Try it yourself</Link>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Img variant="top" src="/images/home_online-courses.jpg" />
                                <Card.Body>
                                <Card.Title>Online courses to take </Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link className="btn btn-primary" to="/signup">Try it yourself</Link>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Img variant="top" src="/images/home_furniture.jpg" />
                                <Card.Body>
                                <Card.Title>Furniture for a new house</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Link className="btn btn-primary" to="/signup">Try it yourself</Link>
                                </Card.Body>
                            </Card>

                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
