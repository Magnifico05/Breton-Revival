import React, { useEffect, useState, useRef } from "react";

const WORDS = [
  { w: "kenavo", m: "goodbye", p: "/keˈnavɔ/" },
  { w: "demat", m: "hello", p: "/deˈmat/" },
  { w: "trugarez", m: "thank you", p: "/truɡaˈrez/" },
  { w: "bremañ", m: "now", p: "/brəˈmã/" },
  { w: "yecʼhed", m: "cheers", p: "/jɛxɛt/" },
];

export default function WOD() {
  const [i, setI] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    start();
    return () => stop();
  }, []);

  function start() {
    stop();
    timer.current = setInterval(
      () => setI((x) => (x + 1) % WORDS.length),
      6000
    );
  }
  function stop() {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }

  const w = WORDS[i];
  return (
    <div className="card side-wod" onMouseEnter={stop} onMouseLeave={start}>
      <div className="kv">Word of the Day</div>
      <div className="wod-card">
        <div className="wod-word">{w.w}</div>
        <div>{w.m}</div>
        <div className="kv">
          <em>{w.p}</em>
        </div>
        <button
          className="cta"
          style={{ marginTop: 10 }}
          onClick={() => setI((x) => (x + 1) % WORDS.length)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
