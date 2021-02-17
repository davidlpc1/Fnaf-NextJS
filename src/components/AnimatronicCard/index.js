import React from "react";
import { AnimatronicCardContainer,AnimatronicImage } from './styles';

export default function AnimatronicCard({ image, name, game }) {
  function speakNameOfAnimatronic() {
    if (!"speechSynthesis" in window) return;
    window.speechSynthesis.cancel(msg);

    const msg = new SpeechSynthesisUtterance();
    msg.text = `${name} of ${game}`;
    msg.lang = "en-us";
    window.speechSynthesis.speak(msg);

    return;
  }

  return (
    <AnimatronicCardContainer>
      <button onClick={speakNameOfAnimatronic}>
        <AnimatronicImage src={image || "https://placehold.it/150x150"} />
        <strong>{name}</strong> <span>{game}</span>
      </button>
    </AnimatronicCardContainer>
  );
}
