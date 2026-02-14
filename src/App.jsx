import { useState, useEffect } from 'react'
import ourPhoto from './assets/IMG_1827.JPEG'
import './App.css'

function App() {
  const [opened, setOpened] = useState(false)
  const [opening, setOpening] = useState(false)
  const [confetti, setConfetti] = useState([])

  const handleOpen = () => {
    if (opened) return
    setOpening(true)
    
    // Създаване на конфети ефект
    const newConfetti = [...Array(40)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2,
      rotation: Math.random() * 360
    }))
    setConfetti(newConfetti)
    
    setTimeout(() => {
      setOpened(true)
      setOpening(false)
    }, 800)
    
    setTimeout(() => setConfetti([]), 4000)
  }

  const handleClickHeart = (e) => {
    if (!opened) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const newHeart = {
      id: Date.now(),
      x,
      y
    }
    
    setClickHearts(prev => [...prev, newHeart])
    setTimeout(() => {
      setClickHearts(prev => prev.filter(h => h.id !== newHeart.id))
    }, 1000)
  }

  return (
    <div className="valentine" onClick={handleClickHeart}>
      {/* Повече плаващи сърца */}
      <div className="hearts">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="heart" style={{ '--i': i }}>♥</span>
        ))}
      </div>
      
      {/* Купидонови стрелички */}
      <div className="arrows">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="arrow" style={{ '--i': i }}>💘</span>
        ))}
      </div>
      
      {/* Рози */}
      <div className="roses">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="rose" style={{ '--i': i }}>🌹</span>
        ))}
      </div>
      
      {/* Блестящи звезди */}
      <div className="sparkles">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="sparkle" style={{ '--i': i }}>✦</span>
        ))}
      </div>
      
      {/* Целувки емоджита */}
      <div className="kisses">
        {[...Array(7)].map((_, i) => (
          <span key={i} className="kiss" style={{ '--i': i }}>💋</span>
        ))}
      </div>

      {/* Конфети при отваряне */}
      {confetti.length > 0 && (
        <div className="confetti-container">
          {confetti.map(c => (
            <div
              key={c.id}
              className="confetti"
              style={{
                left: `${c.left}%`,
                animationDelay: `${c.delay}s`,
                animationDuration: `${c.duration}s`,
                transform: `rotate(${c.rotation}deg)`
              }}
            >
              {['❤️', '💕', '💖', '💗', '💝', '🌹', '✨'][Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>
      )}

      <main className={`content ${opened ? 'opened' : ''}`}>
        {!opened ? (
          <div
            className={`envelope ${opening ? 'opening' : ''}`}
            onClick={handleOpen}
          >
            <div className="envelope-flap" />
            <div className="envelope-body">
              <p className="hint">Натисни за да отвориш ♥</p>
              <p className="to">За Айчер 💕</p>
              <div className="envelope-hearts">
                <span>💖</span>
                <span>💗</span>
                <span>💕</span>
              </div>
            </div>
            <div className="envelope-shine" />
          </div>
        ) : (
          <div className="card-inner">
            <div className="photo-wrap">
              <div className="floating-emojis">
                <span className="float-emoji" style={{ '--delay': '0s' }}>💕</span>
                <span className="float-emoji" style={{ '--delay': '0.5s' }}>💖</span>
                <span className="float-emoji" style={{ '--delay': '1s' }}>💗</span>
                <span className="float-emoji" style={{ '--delay': '1.5s' }}>💝</span>
                <span className="float-emoji" style={{ '--delay': '2s' }}>❤️</span>
                <span className="float-emoji" style={{ '--delay': '2.5s' }}>💕</span>
              </div>
              <img
                src={ourPhoto}
                alt="Денис и Айчер"
                className="our-photo"
              />
              <div className="photo-glow" />
              <div className="photo-frame-hearts">
                <span>💖</span>
                <span>💕</span>
                <span>💗</span>
                <span>💝</span>
              </div>
            </div>
            <div className="message">
              <h1 className="msg-line">
                <span className="emoji-dance">💕</span>
                {' '}Айчим, честит Свети Валентин!{' '}
              </h1>
              
              <div className="love-quote msg-line">
                <span className="quote-icon">❝</span>
                <p className="quote-text">
                  Ти си моят слънчев лъч в облачен ден, 
                  моята усмивка сутрин и вечер.
                </p>
                <span className="quote-icon">❞</span>
              </div>
              
              <p className="lead msg-line">
                🌹 Тази снимка е истински приимер за това колко щастлив ме правиш (и една от малкото снимки които имаме 😆)
              </p>
              
              <div className="reasons-section msg-line">
                <h3>💖 Защо те обичам:</h3>
                <ul className="love-reasons">
                  <li>✨ Усмивката ти осветява деня ми</li>
                  <li>💫 Правиш ме по-добър човек</li>
                  <li>🌟 С теб всеки момент е специален</li>
                  <li>💝 Ти си моята половинка</li>
                </ul>
              </div>
              
              <p className="msg-line">
                💕 Благодаря, че си до мен. Благодаря за усмивките, за топлината и за всичко, което правиш.
                Честит Свети Валентин 💕
              </p>
              
              <div className="hearts-row msg-line">
                <span>💖</span>
                <span>💗</span>
                <span>💕</span>
                <span>💝</span>
                <span>❤️</span>
              </div>
              
              <p className="signature msg-line">
                С безкрайна обич,<br />
                <strong>Денис</strong> 💕💖💗
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App