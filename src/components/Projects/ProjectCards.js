import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const SLIDE_INTERVAL = 3000; // ms entre imágenes

function ProjectCards(props) {
  // imgPath puede ser una sola imagen (string) o un array con las que quieras
  const images = Array.isArray(props.imgPath)
    ? props.imgPath.filter(Boolean)
    : [props.imgPath];
  const total = images.length;

  const [current, setCurrent] = useState(0);

  // setTimeout (y no setInterval) para que, si tocás un punto,
  // el contador de 3 segundos arranque de nuevo desde ahí
  useEffect(() => {
    if (total < 2) return undefined;
    const id = setTimeout(() => {
      setCurrent((i) => (i + 1) % total);
    }, SLIDE_INTERVAL);
    return () => clearTimeout(id);
  }, [current, total]);

  return (
    <Card className="project-card-view">
      <div className="card-slideshow">
        {images.map((src, i) => (
          <Card.Img
            key={i}
            variant="top"
            src={src}
            alt={`${props.title || "card"}-${i + 1}`}
            className={`slideshow-img${i === current ? " is-active" : ""}`}
            aria-hidden={i !== current}
          />
        ))}

        {total > 1 && (
          <div className="slideshow-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`slideshow-dot${i === current ? " is-active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Imagen ${i + 1} de ${total}`}
              />
            ))}
          </div>
        )}
      </div>

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;