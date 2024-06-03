import styled from 'styled-components'

const StyledVaga = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3;
  border-radius: 8px;

  &::hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`

const StyledTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

const StyledDetalhes = styled.ul`
  list-style: nome;
  margin: 0;
  padding: 0;
`

const StyledDetalheItem = styled.li`
  margin-borrom: 8px;
`

const StyledLink = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-witdh: 768px) {
    display: block;
  }

  &::hover {
    border-color: var(--cor-principal);
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }
`
type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <StyledVaga>
    <StyledTitulo>{props.titulo}</StyledTitulo>
    <StyledDetalhes>
      <StyledDetalheItem>Localização: {props.localizacao}</StyledDetalheItem>
      <StyledDetalheItem>Senioridade: {props.nivel}</StyledDetalheItem>
      {/* <StyledDetalheItem>
        Tipo de contratacão: {props.modalidade} </StyledDetalheItem> */}
      <StyledDetalheItem>Salário: {props.salarioMin}</StyledDetalheItem>
      <StyledDetalheItem>Requisitos: {props.requisitos}</StyledDetalheItem>
    </StyledDetalhes>
    <StyledLink href="#">Ver detalhes e candidatar-se</StyledLink>
  </StyledVaga>
)

export default Vaga

// import styles from 'styled-components'

// type Props = {
//   titulo: string
//   localizacao: string
//   nivel: string
//   modalidade: string
//   salarioMin: number
//   salarioMax: number
//   requisitos: string[]
// }

// const Vaga = (props: Props) => (
//   <li className={styles.vaga}>
//     <h3 className={styles.vagaTitulo}>{props.titulo}</h3>
//     <ul>
//       <li>Localizacao: {props.localizacao}</li>
//       <li>Senioridade: {props.nivel}</li>
//       <li>Tipo de contratacao: {props.modalidade}</li>
//       <li>
//         Salário: {props.salarioMin} - {props.salarioMax}
//       </li>
//       <li>Requisitos: {props.requisitos.join(', ')}</li>
//     </ul>
//     <a className={styles.vagaLink} href="#">
//       Ver detalhes e candidatar-se
//     </a>
//   </li>
// )

// export default Vaga
