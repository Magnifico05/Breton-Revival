import React from "react";
export default function Cooking() {
  return (
    <div>
      <section className="section card">
        <h2>Cooking Classes</h2>
        <p className="kv">
          Food, culture & language — cook, chat, and learn kitchen vocabulary in
          Breton.
        </p>
        <div className="grid" style={{ marginTop: 12 }}>
          <div className="card">
            <h3>Crêpes & Galettes</h3>
            <p className="kv">
              Cook, chat, and learn kitchen vocabulary in Breton.
            </p>
          </div>
          <div className="card">
            <h3>Seafood of Brittany</h3>
            <p className="kv">Coastal ingredients and regional recipes.</p>
          </div>
          <div className="card">
            <h3>Preserving Traditions</h3>
            <p className="kv">Learn recipes and the stories behind them.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
