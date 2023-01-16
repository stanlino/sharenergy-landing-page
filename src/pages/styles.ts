import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  header {
    display: grid;
    grid-template-columns: 3fr 4fr;
    height: 75vh;

    gap: 4rem;

    max-width: 1200px;
    margin: 0 auto;

    padding: 32px;

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column-reverse;
      height: auto;
    }
  }
`;

export const Hero = styled.div`
  display: flex;
  justify-content: center;

  img {
    object-fit: cover;
    width: 90%;
    border-radius: 16px;
  }
`;

export const Background = styled.div`
  background-color: #f8f8f8;
  background-image: url(https://www.sharenergy.com.br/wp-content/uploads/2020/10/pattern-2.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  z-index: -1;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: flex-start;
  gap: 1.25rem;

  @media (max-width: 720px) {
    align-items: stretch;
  }

  h1 {
    font-size: 40px;
    font-weight: 900;
    color: var(--heading-color);
  }

  p {
    font-weight: 500;
    color: var(--text-color);
    line-height: 2rem;
    font-size: 18px;
  }
`;

export const Separator = styled.div`
  background-color: #161c2d;
  height: 6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  gap: 0.25rem;
  font-size: 20px;
  padding: 0 16px;

  h3 {
    color: white;
    font-weight: 500;
    font-size: 18px;
    text-align: center;

    a {
      margin-left: 5px;
      color: white;
    }
  }
`;

export const Report = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 5em auto;
  gap: 4rem;

  height: 50vh;

  @media (max-width: 720px) {
    height: auto;
    flex-direction: column;
    padding: 32px;
    margin: 1em auto;
  }

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
  }

  > div {
    gap: 1rem;
    align-items: stretch;
  }

  div + div {
    gap: 0;
    align-items: center;

    p {
      text-align: center;
    }
  }

  div h2 {
    font-size: 32px;
    font-weight: 700;
    color: var(--heading-color);
  }

  div p {
    color: var(--text-color);
    font-size: 20px;
    line-height: 1.5em;

    margin-bottom: 1rem;
  }

  div img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const UseCases = styled.section`
  background-color: #f4f7fa;

  .content {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 5em auto;

    padding: 0 32px;

    gap: 2rem;

    @media (max-width: 720px) {
      margin: 2em auto;
    }

    h2 {
      font-size: 36px;
      font-weight: 500;
      text-align: center;
    }

    p {
      text-align: center;
      line-height: 1.5rem;
      font-weight: 500;
      color: var(--text-color);
      font-size: 20px;
      margin-bottom: 2rem;
    }
  }
`;

export const Services = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 1rem;

  a {
    display: flex;
    flex-direction: column;
    flex: 1;

    aspect-ratio: 1;
    border-radius: 8px;
    border: 1px solid #ccc;

    max-height: 200px;
    text-decoration: none;
    overflow: hidden;

    transition: all 0.4s;

    img {
      flex: 1;
      object-fit: cover;
      overflow: hidden;
    }

    .service {
      display: flex;
      justify-content: space-between;
      padding: 8px 16px;

      font-size: 18px;

      border-top: 1px solid #ccc;

      color: var(--heading-color);
    }

    &:hover {
      transform: translateY(-10px);
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;

    a {
      width: 80%;
    }
  }
`;

export const Competences = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 5em auto 0;

  gap: 4rem;

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .img {
    align-items: center;
    position: relative;
    overflow: hidden;

    #back-svg {
      position: absolute;
      z-index: -1;
    }
  }

  .aside {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-right: 5em;

    h2 {
      font-size: 38px;
    }

    p {
      font-size: 20px;
      color: var(--text-color);
      line-height: 2rem;
    }

    .competences {
      display: flex;
      flex-direction: row;

      span {
        font-size: 20px;
        font-weight: 700;

        margin-bottom: 1rem;

        b {
          color: green;
        }
      }
    }
  }

  @media (max-width: 720px) {
    flex-direction: column;
    padding: 0 3rem;

    .img {
      img + img {
        width: 50%;
      }
    }

    .aside {
      padding-right: 0;

      .competences {
        flex-direction: column;
      }
    }
  }
`;

export const ShowCase = styled.section`
  background-image: url(https://www.sharenergy.com.br/wp-content/uploads/2018/05/usina-cia-da-carne.jpg);
  background-size: cover;
  height: 70vh;
  display: flex;

  .overlay {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.6);

    gap: 2rem;

    h2 {
      color: white;
      font-size: 38px;
    }

    p {
      color: white;
      font-weight: 700;
      width: min(500px, 80%);
      text-align: center;
      line-height: 2rem;
    }

    button {
      font-size: 32px;
      color: green;
      width: 70px;
      height: 70px;

      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 50%;

      cursor: pointer;
    }
  }
`;

export const Feedbacks = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 5em auto;

  align-items: center;
  gap: 1rem;

  h2 {
    font-size: 38px;
  }

  p {
    color: var(--text-color);
    font-size: 18px;
    margin-bottom: 2rem;
    text-align: center;
  }

  @media (max-width: 720px) {
    padding: 0 32px;
  }

  .feedbacks {
    display: flex;
    gap: 1rem;

    @media (max-width: 720px) {
      flex-direction: column;
    }
  }

  .feedback {
    display: flex;
    flex-direction: column;
    flex: 1;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);

    gap: 2rem;

    padding: 32px;
    border-radius: 16px;

    img {
      width: 50px;
      aspect-ratio: 1;
      border-radius: 25px;
    }

    p {
      flex: 1;
      text-align: justify;
    }
  }
`;
