import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const TextoNosotros = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
  }
  p {
    line-height: 2;
  }
`

const ContenidoNosotros = () => {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slog: { eq: "Nosotros" } }) {
        nodes {
          titulo
          contenido
          imagen {
            gatsbyImageData
          }
        }
      }
    }
  `)

  const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0]

  const img = getImage(imagen.gatsbyImageData)
  return (
    <>
      <h2
        css={css`
          text-align: center;
          margin-top: 4rem;
          font-size: 4rem;
        `}
      >
        {titulo}
      </h2>
      <TextoNosotros>
        <p>{contenido}</p>
        <GatsbyImage image={img} alt="hotel" />
      </TextoNosotros>
    </>
  )
}

export default ContenidoNosotros
