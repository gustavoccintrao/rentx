import React from "react";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { Container, Header, CarImages, Content, Details, Brand, Description, Name, Period, Price, Rent, About } from "./styles";

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
          ]}
        />
      </CarImages>

      <Content>
          <Details>
            <Description>
              <Brand>
                Lamborghini
              </Brand> 

              <Name>
                Huracan
              </Name>
            </Description>

            <Rent>
              <Period> Ao dia</Period>
              <Price>R$ 500</Price>
            </Rent>
          </Details>

          <About>
            Este é um automóvel desportivo. Surgiu do lendário 
            touro de lide indultado na praça Real Mestranza de Sevilla. 
            É um belíssimo carro pra quem gosta de acelerar.
          </About>
      </Content>
    </Container>
  );
}
