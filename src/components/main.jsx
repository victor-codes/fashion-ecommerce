import React, { useEffect, useLayoutEffect } from "react";
import Button from "./button";
import {
  cardAnim,
  ctaBtn,
  drag,
  heroAnim,
  vidBtnAnim,
} from "../animations/animation";
import { Draggable } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(Draggable);

function Main() {
  useLayoutEffect(() => {
    cardAnim(".one");
    heroAnim(".hero__text__one", ".hero__text", ".third");
    ctaBtn(".shop span", ".shop__btn");
    vidBtnAnim(".path", ".path1", ".over__hidden span");
  }, []);

  useEffect(() => {
    drag(".card__container");
  }, []);
  return (
    <main>
      <div className="card">
        <div className="card__container">
          <div
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1639844814983-285c7588a0e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=444&q=80)",
            }}
            className="card__element"
            data-key={0}
          ></div>
          <div
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1554061841-a222f6258874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
            }}
            data-key={2}
            className="card__element"
          ></div>
          <div
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80)",
            }}
            data-key={1}
            className="card__element one"
          ></div>
        </div>
      </div>
      <Button primary={true} />
      <div className="hero_container">
        <div className="hero__flex pos--abs hero__one">
          <h2>
            <span className="hero__text__one">streetwear is the</span>
          </h2>
          <Button primary={false} />
        </div>
        <div className="hero__flex pos--abs hero__two">
          <div className="over__hidden">
            <p className="hero__text text">
              welcome to the age of streetwear brands, tracksuits and trainers
              are new suits and brogues. we offer you the best of them
            </p>
          </div>
          <h2>
            <span className="third">new casual</span>
          </h2>
        </div>
      </div>
    </main>
  );
}
export default Main;
