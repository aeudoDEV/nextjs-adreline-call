import { Container, ImgageContainer, ContainerPhases } from "./styles";
import Image from 'next/image'
import previewImage from '@/assets/previewImage.png';
import ClaimUsernameForm from "./components";

export default function Home() {
  return (
    <Container>

      <ContainerPhases>

        <h1>Agendamento descomplicado</h1>

        <span>
            Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
        </span>

        <ClaimUsernameForm/>
        
      </ContainerPhases>

      <ImgageContainer>
        <Image height={400} quality={100}  src={previewImage} alt=""/>
      </ImgageContainer>

    </Container>
  )
}
