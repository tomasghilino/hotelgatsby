exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `)

  if (resultado.errors) {
    reporter.panic("No hubo resultados", resultado.errors)
  }

  //si hay paginas
  const habitaciones = resultado.data.allDatoCmsHabitacion.nodes

  habitaciones.forEach(habitacion => {
    const { createPage } = actions
    createPage({
      path: habitacion.slug,
      component: require.resolve("./src/components/habitaciones.jsx"),
      context: {
        slug: habitacion.slug,
      },
      defer: true,
    })
  })
}
