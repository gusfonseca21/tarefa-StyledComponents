import React from "react";

import { StyledCard } from "./styles/Card.styled";

export function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>
          {title}
          <p>{body}</p>
        </h2>
      </div>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
    </StyledCard>
  );
}
