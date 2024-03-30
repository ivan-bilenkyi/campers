import welcomePageImage1x from '../../assets/welcome-page-image-1x.jpg';
import welcomePageImage2x from '../../assets/welcome-page-image-2x.jpg';

import {
  MainContainer,
  MotivationText,
  StartContainer,
  StyledNavLink,
  SubTitle,
  Title,
  TitleContainer,
} from "./Welcome.styled.js";

export const Welcome = () => {
  return (
    <>
      <MainContainer>
        <TitleContainer>
          <Title>
            Camp<span>UA</span>
          </Title>
          <SubTitle>your reliable partner in traveling around Ukraine</SubTitle>
        </TitleContainer>
        <StartContainer>
          <div>
            <picture>
              <source
                srcSet={`${welcomePageImage1x} 1x, ${welcomePageImage2x} 2x`}
                media="(min-width: 320px)"
              />
              <img
                src={welcomePageImage1x}
                alt="man-holding-map"
                width="862px"
                height="507px"
                style={{ borderRadius: '25px' }}
              />
            </picture>
          </div>
          <div>
            <MotivationText>
              Start your unforgettable journey with us today!
            </MotivationText>
            <StyledNavLink to="catalog">LETS GO</StyledNavLink>
          </div>
        </StartContainer>
      </MainContainer>
    </>
  );
};