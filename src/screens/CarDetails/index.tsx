import React from "react";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import { Button } from "../../components/Button";

import SpeedIcon from "../../assets/speed.svg";
import AccelerationIcon from "../../assets/acceleration.svg";
import ForceIcon from "../../assets/force.svg";
import GasolineIcon from "../../assets/gasoline.svg";
import ExchangeIcon from "../../assets/exchange.svg";
import PeopleIcon from "../../assets/people.svg";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Brand,
  Description,
  Name,
  Period,
  Price,
  Rent,
  About,
  Accessories,
  Footer,
} from "./styles";

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
            <Brand>Lamborghini</Brand>

            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period> Ao dia</Period>
            <Price>R$ 500</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="360km/h" icon={SpeedIcon} />
          <Accessory name="3.2s" icon={AccelerationIcon} />
          <Accessory name="800 HP" icon={ForceIcon} />
          <Accessory name="Gasolina" icon={GasolineIcon} />
          <Accessory name="Auto" icon={ExchangeIcon} />
          <Accessory name="2 pessoas" icon={PeopleIcon} />
        </Accessories>

        <About>
          Este é um automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Mestranza de Sevilla. É um belíssimo carro pra
          quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
}
