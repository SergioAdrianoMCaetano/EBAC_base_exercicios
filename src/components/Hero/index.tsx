import styled from 'styled-components'

const StickForm = styled.form`
  margin-bottom: 80px;
  height: 260px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

const Container = styled.div`
  position: relative;
  color: #eee;
`
const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Hero = () => (
  <StickForm>
    <Container>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Container>
  </StickForm>
)

export default Hero

// import styles from './Hero.module.css'

// const Hero = () => (
//   <form className={styles.form}>
//     <div className="container">
//       <h2 className={styles.heroTitle}>
//         As melhores vagas para tecnologia, design e artes visuais.
//       </h2>
//     </div>
//   </form>
// )

// export default Hero
