import React, { useState, useEffect } from 'react';


// --- BANCO DE DADOS DE LAYOUTS ---
const LAYOUTS = {
  positivo_sk6620: {
  name: "Positivo SK6620 (ABNT2)",
  gridCols: 25,
  keys: [
    // --- LINHA 1 (F-KEYS) ---
    { code: 'Escape', label: 'esc', grid: '1 / 1' },
    { code: 'F1', label: 'F1', grid: '1 / 3' }, { code: 'F2', label: 'F2', grid: '1 / 4' },
    { code: 'F3', label: 'F3', grid: '1 / 5' }, { code: 'F4', label: 'F4', grid: '1 / 6' },
    { code: 'F5', label: 'F5', grid: '1 / 8' }, { code: 'F6', label: 'F6', grid: '1 / 9' },
    { code: 'F7', label: 'F7', grid: '1 / 10' }, { code: 'F8', label: 'F8', grid: '1 / 11' },
    { code: 'F9', label: 'F9', grid: '1 / 13' }, { code: 'F10', label: 'F10', grid: '1 / 14' },
    { code: 'F11', label: 'F11', grid: '1 / 15' }, { code: 'F12', label: 'F12', grid: '1 / 16' },
    { code: 'PrintScreen', label: 'prt sc', grid: '1 / 18' }, { code: 'ScrollLock', label: 'scrlk', grid: '1 / 19' }, { code: 'Pause', label: 'pause', grid: '1 / 20' },

    // --- LINHA 2 (NÚMEROS) ---
    { code: 'Backquote', label: "' \"", grid: '2 / 1' },
    { code: 'Digit1', label: '1', grid: '2 / 2' }, { code: 'Digit2', label: '2', grid: '2 / 3' },
    { code: 'Digit3', label: '3', grid: '2 / 4' }, { code: 'Digit4', label: '4', grid: '2 / 5' },
    { code: 'Digit5', label: '5', grid: '2 / 6' }, { code: 'Digit6', label: '6', grid: '2 / 7' },
    { code: 'Digit7', label: '7', grid: '2 / 8' }, { code: 'Digit8', label: '8', grid: '2 / 9' },
    { code: 'Digit9', label: '9', grid: '2 / 10' }, { code: 'Digit0', label: '0', grid: '2 / 11' },
    { code: 'Minus', label: '-', grid: '2 / 12' }, { code: 'Equal', label: '=', grid: '2 / 13' },
    { code: 'Backspace', label: 'backspace', grid: '2 / 14 / 2 / 17' },
    { code: 'Insert', label: 'ins', grid: '2 / 18' }, { code: 'Home', label: 'home', grid: '2 / 19' }, { code: 'PageUp', label: 'pg up', grid: '2 / 20' },
    { code: 'NumLock', label: 'num', grid: '2 / 22' }, { code: 'NumpadDivide', label: '/', grid: '2 / 23' }, { code: 'NumpadMultiply', label: '*', grid: '2 / 24' }, { code: 'NumpadSubtract', label: '-', grid: '2 / 25' },

    // --- LINHA 3 (QWERTY) ---
    { code: 'Tab', label: 'tab', grid: '3 / 1 / 3 / 3' },
    { code: 'KeyQ', label: 'Q', grid: '3 / 3' }, { code: 'KeyW', label: 'W', grid: '3 / 4' },
    { code: 'KeyE', label: 'E', grid: '3 / 5' }, { code: 'KeyR', label: 'R', grid: '3 / 6' },
    { code: 'KeyT', label: 'T', grid: '3 / 7' }, { code: 'KeyY', label: 'Y', grid: '3 / 8' },
    { code: 'KeyU', label: 'U', grid: '3 / 9' }, { code: 'KeyI', label: 'I', grid: '3 / 10' },
    { code: 'KeyO', label: 'O', grid: '3 / 11' }, { code: 'KeyP', label: 'P', grid: '3 / 12' },
    { code: 'BracketLeft', label: '´', grid: '3 / 13' }, { code: 'BracketRight', label: '[', grid: '3 / 14' },
    { code: 'Delete', label: 'del', grid: '3 / 18' }, { code: 'End', label: 'end', grid: '3 / 19' }, { code: 'PageDown', label: 'pg dn', grid: '3 / 20' },
    { code: 'Numpad7', label: '7', grid: '3 / 22' }, { code: 'Numpad8', label: '8', grid: '3 / 23' }, { code: 'Numpad9', label: '9', grid: '3 / 24' }, { code: 'NumpadAdd', label: '+', grid: '3 / 25 / 5 / 26' },

    // --- LINHA 4 (ASDF + CEDILHA) ---
    { code: 'CapsLock', label: 'caps lock', grid: '4 / 1 / 4 / 3' },
    { code: 'KeyA', label: 'A', grid: '4 / 3' }, { code: 'KeyS', label: 'S', grid: '4 / 4' },
    { code: 'KeyD', label: 'D', grid: '4 / 5' }, { code: 'KeyF', label: 'F', grid: '4 / 6' },
    { code: 'KeyG', label: 'G', grid: '4 / 7' }, { code: 'KeyH', label: 'H', grid: '4 / 8' },
    { code: 'KeyJ', label: 'J', grid: '4 / 9' }, { code: 'KeyK', label: 'K', grid: '4 / 10' },
    { code: 'KeyL', label: 'L', grid: '4 / 11' }, { code: 'Semicolon', label: 'Ç', grid: '4 / 12' },
    { code: 'Quote', label: '~', grid: '4 / 13' }, { code: 'Backslash', label: ']', grid: '4 / 14' },
    { code: 'Enter', label: 'enter', grid: '3 / 15 / 5 / 17' }, // Enter em L
    { code: 'Numpad4', label: '4', grid: '4 / 22' }, { code: 'Numpad5', label: '5', grid: '4 / 23' }, { code: 'Numpad6', label: '6', grid: '4 / 24' },

    // --- LINHA 5 (ZXCV + SHIFT) ---
    { code: 'ShiftLeft', label: 'shift', grid: '5 / 1 / 5 / 2' },
    { code: 'IntlBackslash', label: '\\', grid: '5 / 2' }, // Tecla ao lado do Z
    { code: 'KeyZ', label: 'Z', grid: '5 / 3' }, { code: 'KeyX', label: 'X', grid: '5 / 4' },
    { code: 'KeyC', label: 'C', grid: '5 / 5' }, { code: 'KeyV', label: 'V', grid: '5 / 6' },
    { code: 'KeyB', label: 'B', grid: '5 / 7' }, { code: 'KeyN', label: 'N', grid: '5 / 8' },
    { code: 'KeyM', label: 'M', grid: '5 / 9' }, { code: 'Comma', label: ',', grid: '5 / 10' },
    { code: 'Period', label: '.', grid: '5 / 11' }, { code: 'Slash', label: '/', grid: '5 / 12' },
    { code: 'ShiftRight', label: 'shift', grid: '5 / 13 / 5 / 17' },
    { code: 'ArrowUp', label: '▲', grid: '5 / 19' },
    { code: 'Numpad1', label: '1', grid: '5 / 22' }, { code: 'Numpad2', label: '2', grid: '5 / 23' }, { code: 'Numpad3', label: '3', grid: '5 / 24' }, { code: 'NumpadEnter', label: 'ent', grid: '5 / 25 / 7 / 26' },

    // --- LINHA 6 (BASE) ---
    { code: 'ControlLeft', label: 'ctrl', grid: '6 / 1' },
    { code: 'MetaLeft', label: 'win', grid: '6 / 2' },
    { code: 'AltLeft', label: 'alt', grid: '6 / 3' },
    { code: 'Space', label: '', grid: '6 / 4 / 6 / 12' },
    { code: 'AltRight', label: 'alt gr', grid: '6 / 12' },
    { code: 'MetaRight', label: 'win', grid: '6 / 13' },
    { code: 'ContextMenu', label: '≡', grid: '6 / 14' },
    { code: 'ControlRight', label: 'ctrl', grid: '6 / 15 / 6 / 17' },
    { code: 'ArrowLeft', label: '◄', grid: '6 / 18' }, { code: 'ArrowDown', label: '▼', grid: '6 / 19' }, { code: 'ArrowRight', label: '►', grid: '6 / 20' },
    { code: 'Numpad0', label: '0', grid: '6 / 22 / 6 / 24' }, { code: 'NumpadDecimal', label: '.', grid: '6 / 24' }
  ]
}
};

export default function KeyboardTester() {
  const [activeKeys, setActiveKeys] = useState(new Set()); // AZUL
  const [testedKeys, setTestedKeys] = useState(new Set()); // VERDE
  const [rejectedKeys, setRejectedKeys] = useState(new Set()); // VERMELHO (Falha)
  const [theme, setTheme] = useState('dark');
  const [lastCode, setLastCode] = useState('');
  const [showReportForm, setShowReportForm] = useState(false);
  const [isFinalized, setIsFinalized] = useState(false);
  const [reportText, setReportText] = useState('');
  const [resultStatus, setResultStatus] = useState(null); // 'approved' ou 'rejected'

  const currentLayout = LAYOUTS.positivo_sk6620;

  useEffect(() => {
    if (isFinalized) return;
    const handleKeyDown = (e) => {
      e.preventDefault();
      setActiveKeys(prev => new Set(prev).add(e.code));
      setLastCode(e.code);
    };
    const handleKeyUp = (e) => {
      setActiveKeys(prev => { const n = new Set(prev); n.delete(e.code); return n; });
      setTestedKeys(prev => new Set(prev).add(e.code));
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isFinalized]);

  // Regras de Negócio
  const isAllTested = testedKeys.size >= currentLayout.keys.length;
  const canReject = reportText.trim().length >= 5 && rejectedKeys.size > 0;

  const handleFinalize = (status) => {
    setResultStatus(status);
    setIsFinalized(true);
    setShowReportForm(false);
  };

  // --- TELA DE RESUMO FINAL ---
  if (isFinalized) {
    return (
      <div className={`summary-screen ${theme} ${resultStatus}`}>
        <div className="summary-box">
          <h1 className={resultStatus === 'approved' ? 'text-success' : 'text-danger'}>
            {resultStatus === 'approved' ? '✅ TECLADO PRONTO PARA USO' : '❌ TECLADO REPROVADO'}
          </h1>
          
          <div className="keyboard-preview-centered">
            <div className="keyboard-grid" style={{ gridTemplateColumns: `repeat(${currentLayout.gridCols}, 1fr)` }}>
              {currentLayout.keys.map(key => (
                <div 
                  key={key.code} 
                  className={`key-unit ${rejectedKeys.has(key.code) ? 'failed-red' : 'tested'}`} 
                  style={{ gridArea: key.grid }}
                >
                  {key.label}
                </div>
              ))}
            </div>
          </div>

          <div className="report-detail-box">
            <p><strong>Modelo:</strong> {currentLayout.name}</p>
            {resultStatus === 'rejected' && (
              <>
                <p><strong>Observações Técnicas:</strong> {reportText}</p>
                <p><strong>Teclas com Defeito:</strong> <span className="text-danger">{[...rejectedKeys].join(', ')}</span></p>
              </>
            )}
          </div>

          <button className="btn-restart" onClick={() => window.location.reload()}>REINICIAR NOVO TESTE</button>
        </div>
      </div>
    );
  }

  // --- TELA DE TESTE ATIVO ---
  return (
    <div className={`tester-wrapper ${theme}`}>
      <header className="tester-header">
        <div className="brand">
          <h2>DIAGNÓSTICO TÉCNICO</h2>
          <span className="model-tag">{currentLayout.name}</span>
        </div>
        <div className="control-center">
          <button className="btn-util" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? '☀️ CLARO' : '🌙 ESCURO'}
          </button>
          <button className="btn-util" onClick={() => {setTestedKeys(new Set()); setRejectedKeys(new Set()); setReportText('');}}>RESET</button>
        </div>
      </header>

      <main className="keyboard-viewport">
        <div className="keyboard-container-main">
          <div className="keyboard-plate">
            <div className="keyboard-grid" style={{ gridTemplateColumns: `repeat(${currentLayout.gridCols}, 1fr)` }}>
              {currentLayout.keys.map(key => (
                <div 
                  key={key.code}
                  className={`key-unit 
                    ${activeKeys.has(key.code) ? 'pressing' : testedKeys.has(key.code) ? 'tested' : ''} 
                    ${rejectedKeys.has(key.code) ? 'to-reject' : ''}`}
                  style={{ gridArea: key.grid }}
                  onClick={() => showReportForm && setRejectedKeys(prev => {
                    const next = new Set(prev);
                    next.has(key.code) ? next.delete(key.code) : next.add(key.code);
                    return next;
                  })}
                >
                  {key.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <section className="report-panel">
        {!showReportForm ? (
          <div className="report-actions">
            <div className="status-info">
              <div className={`badge ${isAllTested ? 'approved' : 'testing'}`}>{isAllTested ? 'APROVADO' : 'EM TESTE'}</div>
              <span>Última Tecla: <strong>{lastCode || '---'}</strong></span>
            </div>
            <div className="btn-group">
              <button className={`btn-approve ${isAllTested ? 'active' : ''}`} disabled={!isAllTested} onClick={() => handleFinalize('approved')}>APROVAR TECLADO</button>
              <button className="btn-reject" onClick={() => setShowReportForm(true)}>REPROVAR / INICIAR LAUDO</button>
            </div>
          </div>
        ) : (
          <div className="report-form-active">
            <p className="instruction">Selecione as teclas defeituosas no layout acima (ficarão em vermelho) e descreva o motivo:</p>
            <textarea 
              value={reportText} 
              onChange={(e) => setReportText(e.target.value)} 
              placeholder="Mínimo 5 caracteres de observação técnica para habilitar a reprovação..." 
            />
            <div className="form-btns">
              <button className="btn-reject" disabled={!canReject} onClick={() => handleFinalize('rejected')}>FINALIZAR REPROVAÇÃO</button>
              <button className="btn-util" onClick={() => setShowReportForm(false)}>CANCELAR</button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}