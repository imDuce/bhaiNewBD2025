
import React, { useEffect, useRef, useState } from 'react';
import './stylingForUtils.css';

class TextScrambleEffect {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  
  update() {
    let output = '';
    let complete = 0;
    
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.4) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    
    this.el.innerHTML = output;
    
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const TextScramble = ({ phrases = [] }) => {
  const textRef = useRef(null);
  const fxRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (textRef.current && phrases.length > 0 && !isInitialized) {
      fxRef.current = new TextScrambleEffect(textRef.current);
      setIsInitialized(true);
    }
  }, [phrases, isInitialized]);

  useEffect(() => {
    if (!isInitialized || phrases.length === 0) return;
    
    let currentIndex = 0;
    
    const playNextPhrase = () => {
      if (fxRef.current) {
        fxRef.current.setText(phrases[currentIndex]).then(() => {
          currentIndex++;
          if (currentIndex < phrases.length) {
            setTimeout(playNextPhrase, 1900);
          }
        });
      }
    };
    
    playNextPhrase();

    return () => {
      if (fxRef.current && fxRef.current.frameRequest) {
        cancelAnimationFrame(fxRef.current.frameRequest);
      }
    };
  }, [phrases, isInitialized]);

  return (
    <div className="animContainer">
      <div className="animText" ref={textRef}></div>
    </div>
  );
};

// Example usage
const TestAnimation6 = () => {
  const phrases = [
    'Another year, another power-up! ',
    "At 17, you're not just growing older,",
    'you r turning into the man that destiny awaits.',
    ' With every frame you edit, you turn reality into magic.',
    'Wishing U a year filled with legendary victories,',
    'thrilling boss fights,',
    'and the sweetest loot life has to offer',
    "Whether you're in gaming mode,",
    'editing mode, or just chilling with anime marathons,',
    'always know that you are loved, appreciated, and celebrated.',
    'Keep shining, keep dreaming, and most importantly',
    '-- keep being the amazing brother you are.',
    'Wishing you unlimited health, infinite respawns, ',
    "and the best birthday ever! "
  ];



 

  return (
    <div className="animApp">
      <TextScramble phrases={phrases} />
    </div>
  );
};

export default TestAnimation6;