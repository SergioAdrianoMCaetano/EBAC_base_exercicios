import styled from 'styled-components'

const Header = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-secundaria);
`

const Title = styled.h1`
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`

const Cabecalho = () => (
  <Header>
    <Title>EBAC JoBs</Title>
  </Header>
)

export default Cabecalho

// import styles from './Cabecalho.module.css'

// const Cabecalho = () => (
//   <header className={styles.cabecalho}>
//     <h1>EBAC Jobs</h1>
//   </header>
// )

// export default Cabecalho
