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
    heroAnim(".first_text", ".hero_text", ".third");
    ctaBtn(".shop span", ".shop_btn");
    vidBtnAnim(".path", ".path1", ".over_hidden span");
  }, []);

  useEffect(() => {
    drag(".card_container");
  }, []);
  return (
    <main className="firs">
      <div className="card_mother_container">
        <div className="card_container">
          <img
            className="card three"
            data-key={0}
            src="https://images.unsplash.com/photo-1639844814983-285c7588a0e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=444&q=80"
            alt="woman"
          />
          <img
            data-key={2}
            className="card two"
            src="https://images.unsplash.com/photo-1554061841-a222f6258874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="woman"
          />
          <img
            data-key={1}
            className="card one"
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
            alt="woman"
          />
        </div>
      </div>
      <Button primary={true} className="index" />
      <div className="hero_container">
        <div className="hero_flex hero_one">
          <h2>
            <span className="first_text">streetwear is the</span>
          </h2>
          <Button primary={false} />
        </div>
        <div className="hero_flex hero_two">
          <div className="over_hidden">
            <p className="hero_text text">
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
