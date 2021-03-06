import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
`

const HabitacionPreview = ({ habitacion }) => {
  const { contenido, imagen, titulo, slug } = habitacion

  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2rem;
      `}
    >
      <GatsbyImage image={imagen.gatsbyImageData} />
      <div
        css={css`
          padding: 3rem;
        `}
      >
        <h3
          css={css`
            font-size: 3rem;
          `}
        >
          {titulo}
        </h3>
        <p
          css={css`
            height: 400px;
            overflow-y: auto;
          `}
        >
          {contenido}
        </p>

        <Boton to={slug}>Ver Habitación</Boton>
      </div>
    </div>
  )
}

export default HabitacionPreview
