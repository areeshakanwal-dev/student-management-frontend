import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isFocused, setIsFocused] = useState({ email: false, password: false });
  const { login, error, clearError } = useAuth();
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  // Particle Background Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = `hsla(${Math.random() * 60 + 230}, 70%, 70%, ${this.opacity})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const createParticles = () => {
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    createParticles();

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(108, 99, 255, ${0.1 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  useEffect(() => {
    return () => clearError();
  }, [clearError]);

  useEffect(() => {
    if (error) {
      setLocalError(error);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');
    setLoading(true);

    const result = await login(email, password);
    if (result.success) {
      navigate('/dashboard');
    }
    setLoading(false);
  };

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    setIsFocused({ ...isFocused, [field]: false });
  };

  return (
    <div className="login-page-ultra">
      {/* Particle Canvas Background */}
      <canvas ref={canvasRef} className="particle-canvas"></canvas>

      <div className="login-container-ultra">
        {/* Left Side - 3D Interactive Image */}
        <div className="login-image-side-ultra">
          <div className="image-content-ultra">
            <div className="floating-badge">
              <span className="badge-pulse"></span>
              <span className="badge-text">✨ 2,500+ Active Students</span>
            </div>

            <div className="image-illustration-ultra">
              <div className="orb-container">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
                <div className="orb orb-4"></div>
                <div className="center-icon">📚</div>
              </div>
              <div className="floating-icons">
                <div className="icon-item icon-1">🎯</div>
                <div className="icon-item icon-2">💡</div>
                <div className="icon-item icon-3">🚀</div>
                <div className="icon-item icon-4">⭐</div>
                <div className="icon-item icon-5">🏆</div>
                <div className="icon-item icon-6">✨</div>
              </div>
            </div>

            <div className="image-text-ultra">
              <h2>Welcome Back!</h2>
              <p>Continue your learning journey with personalized courses and expert guidance.</p>
              <div className="image-stats">
                <div className="stat-item-ultra">
                  <span className="stat-number">50K+</span>
                  <span className="stat-label">Students</span>
                </div>
                <div className="stat-divider-ultra"></div>
                <div className="stat-item-ultra">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Courses</span>
                </div>
                <div className="stat-divider-ultra"></div>
                <div className="stat-item-ultra">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>

            <div className="image-footer-ultra">
              <span>Designed with ❤️</span>
              <span className="footer-divider">•</span>
              <span>by freepik</span>
            </div>
          </div>
        </div>

        {/* Right Side - Interactive Form */}
        <div className="login-form-side-ultra">
          <div className="form-wrapper-ultra">
            <div className="form-header-ultra">
              <div className="logo-ultra">
                <span className="logo-icon-ultra">📚</span>
                <span className="logo-text-ultra">StudentMS</span>
              </div>
              <div className="form-title-ultra">
                <h1>Welcome Back</h1>
                <p>Sign in to access your personalized dashboard</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="login-form-ultra">
              <div className={`input-group-ultra ${isFocused.email ? 'focused' : ''}`}>
                <div className="input-icon-ultra">👤</div>
                <div className="input-field-ultra">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="input-highlight"></div>
              </div>

              <div className={`input-group-ultra ${isFocused.password ? 'focused' : ''}`}>
                <div className="input-icon-ultra">🔒</div>
                <div className="input-field-ultra">
                  <label>Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => handleFocus('password')}
                    onBlur={() => handleBlur('password')}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="input-highlight"></div>
              </div>

              <div className="form-options-ultra">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="checkbox-box">
                    <span className="checkbox-check">✓</span>
                  </span>
                  <span className="checkbox-label">Remember me</span>
                </label>
                <Link to="/forgot-password" className="forgot-link-ultra">
                  Forgot password?
                </Link>
              </div>

              {localError && (
                <div className="error-message-ultra">
                  <span className="error-icon">⚠️</span>
                  {localError}
                </div>
              )}

              <button type="submit" className="login-btn-ultra" disabled={loading}>
                {loading ? (
                  <span className="btn-loader">
                    <span className="loader-dot"></span>
                    <span className="loader-dot"></span>
                    <span className="loader-dot"></span>
                  </span>
                ) : (
                  <>
                    <span>Sign In</span>
                    <span className="btn-arrow-ultra">→</span>
                  </>
                )}
              </button>

              <div className="social-login">
                <div className="social-divider">
                  <span>Or continue with</span>
                </div>
                <div className="social-buttons">
                  <button type="button" className="social-btn google">
                    <span className="social-icon">G</span>
                    Google
                  </button>
                  <button type="button" className="social-btn github">
                    <span className="social-icon">🐙</span>
                    GitHub
                  </button>
                </div>
              </div>
            </form>

            <div className="form-footer-ultra">
              <p>
                Don't have an account? <Link to="/register">Create Account</Link>
              </p>
              <p className="terms-text">
                By signing in, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;