"use client";
import React, { useState, useEffect } from "react";
// import "./PricingComponent.css"; // You can create a CSS file for your styles

function PricingComponent() {
  const [overlayStyle, setOverlayStyle] = useState({
    opacity: 0,
    x: 0,
    y: 0,
  });

  const applyOverlayMask = (e, cardsContainer) => {
    const x = e.pageX - cardsContainer.offsetLeft;
    const y = e.pageY - cardsContainer.offsetTop;

    setOverlayStyle({
      opacity: 1,
      x,
      y,
    });
  };

  useEffect(() => {
    const cardsContainer = document.querySelector(".cards");
    const cards = Array.from(document.querySelectorAll(".card"));
    const overlay = document.querySelector(".overlay");

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = cards.indexOf(entry.target);
        let width = entry.borderBoxSize[0].inlineSize;
        let height = entry.borderBoxSize[0].blockSize;

        if (cardIndex >= 0) {
          overlay.children[cardIndex].style.width = `${width}px`;
          overlay.children[cardIndex].style.height = `${height}px`;
        }
      });
    });

    const createOverlayCta = (overlayCard, ctaEl) => {
      const overlayCta = document.createElement("div");
      overlayCta.classList.add("cta");
      overlayCta.textContent = ctaEl.textContent;
      overlayCta.setAttribute("aria-hidden", true);
      overlayCard.appendChild(overlayCta);
    };

    const initOverlayCard = (cardEl) => {
      const overlayCard = document.createElement("div");
      overlayCard.classList.add("card");
      createOverlayCta(overlayCard, cardEl.lastElementChild);
      overlay.appendChild(overlayCard);
      observer.observe(cardEl);
    };

    cards.forEach(initOverlayCard);

    const handlePointerMove = (e) => {
      applyOverlayMask(e, cardsContainer);
    };

    document.body.addEventListener("pointermove", handlePointerMove);

    return () => {
      // Clean up event listeners if needed
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <main class="main flow">
      <h1 class="main__heading">Pricing</h1>
      <div class="main__cards cards">
        <div class="cards__inner">
          <div class="cards__card card">
            <h2 class="card__heading">Basic</h2>
            <p class="card__price">$9.99</p>
            <ul role="list" class="card__bullets flow">
              <li>Access to standard workouts and nutrition plans</li>
              <li>Email support</li>
            </ul>
            <a href="#basic" class="card__cta cta">
              Get Started
            </a>
          </div>

          <div class="cards__card card">
            <h2 class="card__heading">Pro</h2>
            <p class="card__price">$19.99</p>
            <ul role="list" class="card__bullets flow">
              <li>Access to advanced workouts and nutrition plans</li>
              <li>Priority Email support</li>
              <li>Exclusive access to live Q&A sessions</li>
            </ul>
            <a href="#pro" class="card__cta cta">
              Upgrade to Pro
            </a>
          </div>

          <div class="cards__card card">
            <h2 class="card__heading">Ultimate</h2>
            <p class="card__price">$29.99</p>
            <ul role="list" class="card__bullets flow">
              <li>Access to all premium workouts and nutrition plans</li>
              <li>24/7 Priority support</li>
              <li>1-on-1 virtual coaching session every month</li>
              <li>Exclusive content and early access to new features</li>
            </ul>
            <a href="#ultimate" class="card__cta cta">
              Go Ultimate
            </a>
          </div>
        </div>

        <div class="overlay cards__inner"></div>
      </div>
    </main>
  );
}

export default PricingComponent;
