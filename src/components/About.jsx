import React, { useEffect, useRef, useState } from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import styled from "styled-components";
import { Photo } from "../utils/helpers";
import Buttons from "./Button";

const About = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);
  const [counterSlider, setCounterSlider] = useState(1);
  const [heightCliet, setHeightCliet] = useState();
  const refChildren = useRef();
  useEffect(() => {
    if (refChildren?.current?.clientHeight !== undefined) {
      setHeightCliet(refChildren.current?.clientHeight);
    }

    if (refChildren?.current?.children?.length !== undefined)
      setCounterSlider(refChildren.current.children.length);
  }, []);

  function changeSlide(param) {
    switch (param) {
      case "up":
        setActiveSlideIndex((prev) => prev + 1);
        if (activeSlideIndex === counterSlider) {
          setActiveSlideIndex(0);
        }
        break;
      case "down":
        setActiveSlideIndex((prev) => prev - 1);
        if (activeSlideIndex < 0) {
          setActiveSlideIndex(counterSlider - 1);
        }
        break;
      default:
        // Если переданное значение не равно "up" или "down"
        console.log("Неверный параметр для функции changeSlide");
        break;
    }
    // if (param === "up") {
    //   setActiveSlideIndex((prev) => prev + 1);
    //   if (activeSlideIndex === counterSlider) {
    //     setActiveSlideIndex(0);
    //   }
    // } else if (param === "down") {
    //   setActiveSlideIndex((prev) => prev - 1);
    //   if (activeSlideIndex < 0) {
    //     setActiveSlideIndex(counterSlider - 1);
    //   }
    // }
  }
  return (
    <MainAbout>
      <Sidebar
        top={counterSlider - 1}
        activeSlides={activeSlideIndex}
        heights={heightCliet}
        ref={refChildren}
      >
        {Photo.map((el) => {
          return (
            <DivBackground key={el.key} bg={el.background}>
              <Title>{el.title}</Title>
              <p>{el.description}</p>
            </DivBackground>
          );
        })}
      </Sidebar>
      <MainSlide
        activeSlides={activeSlideIndex}
        heights={heightCliet}
        ref={refChildren}
      >
        {Photo.map((el) => {
          return <MainPhoto key={el.key} img={el.img} />;
        })}
      </MainSlide>
      <Controls>
        <Buttons selected={true} onClick={changeSlide}>
          <FaLongArrowAltDown />
        </Buttons>
        <Buttons selected={false} onClick={changeSlide}>
          <FaLongArrowAltUp />
        </Buttons>
      </Controls>
    </MainAbout>
  );
};

export default About;

const MainAbout = styled.div`
  position: relative;
  /* overflow: hidden; */
  width: 100%;
  height: 100vh;
`;

const Sidebar = styled.div`
  height: 100%;
  width: 35%;
  position: absolute;
  top: ${({ top }) => -top * 100}vh;
  left: 0;
  transition: transform 0.5s ease-in-out;
  transform: translateY(
    ${({ activeSlides, heights }) => activeSlides * heights}px
  );
`;

const DivBackground = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: ${({ bg }) => bg};
`;

const Title = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
  margin-top: -30px;
`;

const MainSlide = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 35%;
  width: 65%;
  transform: translateY(
    ${({ activeSlides, heights }) => -activeSlides * heights}px
  );
  transition: transform 0.5s ease-in-out;
`;

const MainPhoto = styled.div`
  background: url(${({ img }) => img}) no-repeat center/cover;
  height: 100%;
  width: 100%;
`;

const Controls = styled.div`
  button:nth-child(1) {
    transform: translateX(-100%);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  button:nth-child(2) {
    transform: translateY(-100%);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
