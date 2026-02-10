import React, { useState } from 'react';
import KeyboardTester from './KeyboardTester'; // O seu código do Dell KB216
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  if (activeTab === 'home') {
    return (
      <div className="dashboard-container">
        <header>
          <h1>HARDWARE_TEST_CENTER v1.0</h1>
          <p>Selecione o periférico para diagnóstico</p>
        </header>

        <div className="grid-menu">
          <button className="card" onClick={() => setActiveTab('keyboard')}>
            <span className="icon">⌨️</span>
            <h3>Teclado</h3>
            <p>Layouts Dell, HP, Lenovo e Positivo</p>
          </button>

          <button className="card" onClick={() => setActiveTab('mouse')}>
            <span className="icon">🖱️</span>
            <h3>Mouse</h3>
            <p>DPI, Cliques e Polling Rate</p>
          </button>

          <button className="card" onClick={() => setActiveTab('webcam')}>
            <span className="icon">📷</span>
            <h3>Webcam</h3>
            <p>Resolução e Taxa de Quadros</p>
          </button>

          <button className="card" onClick={() => setActiveTab('monitor')}>
            <span className="icon">🖥️</span>
            <h3>Monitor</h3>
            <p>Cores sólidas e Dead Pixels</p>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="module-wrapper">
      <button className="back-btn" onClick={() => setActiveTab('home')}>← Voltar ao Menu</button>
      {activeTab === 'keyboard' && <KeyboardTester />}
      {activeTab === 'monitor' && <div className="monitor-test">Módulo em desenvolvimento...</div>}
    </div>
  );
}