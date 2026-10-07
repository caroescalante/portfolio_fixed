import React from "react";
import './Services.css';
import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
    return (
        <section className="services-section" id="servicios">

            <h1 className='title-servicios'> Lista de Servicios </h1>

            <Container>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col xs={12} sm={6} md={4} className="caracteristica-servicio">
                        <h2>Diseño y estilo personalizado</h2>
                    </Col>  
                    <Col xs={12} sm={6} md={4} className="caracteristica-servicio">
                        <h2>Diseño y estilo personalizado</h2>
                    </Col>
                    <Col xs={12} sm={6} md={4} className="caracteristica-servicio">
                        <h2>Diseño y estilo personalizado</h2>
                    </Col>
                    <Col xs={12} sm={6} md={4} className="caracteristica-servicio">
                        <h2>Diseño y estilo personalizado</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Services;