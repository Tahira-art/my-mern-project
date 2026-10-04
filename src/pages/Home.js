
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = sessionStorage.getItem("authUser");

    if (!savedUser) {
      navigate("/", { replace: true });
      return;
    }

    try {
      setUser(JSON.parse(savedUser));
    } catch {
      sessionStorage.removeItem("authUser");
      navigate("/", { replace: true });
    }
  }, [navigate]);

  function logout() {
    sessionStorage.removeItem("authUser");
    sessionStorage.removeItem("googleAccessToken");
    navigate("/", { replace: true });
  }

  if (!user) return null;

  const firstName = user.given_name || user.name?.split(" ")[0];

  return (
    <main className="home-page">
      <header className="navbar">
        <a className="logo" href="/home">
          <span className="brand-icon mini-icon">✦</span>
          lumora<span className="logo-dot">.</span>
        </a>

        <div className="user-actions">
          {user.picture && (
            <img
              className="avatar"
              src={user.picture}
              alt="Google profile"
              referrerPolicy="no-referrer"
            />
          )}

          <div className="user-info">
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </div>

          <button className="logout-button" onClick={logout}>
            Log out ↗
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">YOUR PERSONAL DASHBOARD</p>

          <h1>
            Hello, <span>{firstName || "there"}.</span>
            <br />
            Let's make it happen.
          </h1>

          <p className="hero-description">
            Welcome to your own little corner of the internet.
            Your journey starts with one small step.
          </p>

          <div className="ready-pill">
            <span className="online-dot" />
            You're signed in and ready
          </div>
        </div>

        <div className="hero-art">
          <div className="art-ring" />
          <div className="art-orb" />
          <div className="art-orb-small" />
          <span className="art-star">✦</span>
        </div>
      </section>

      <section className="section-heading">
        <div>
          <p className="eyebrow">A FRESH BEGINNING</p>
          <h2>Your space to grow.</h2>
        </div>
        <span className="made-for-you">✧ Made for you</span>
      </section>

      <section className="dashboard-grid">
        <article className="dashboard-card featured">
          <div className="card-symbol">✳</div>
          <p className="card-label">01 — YOUR JOURNEY</p>
          <h3>Think bigger.</h3>
          <p>
            Great things begin with curiosity.
            Keep exploring, learning, and creating.
          </p>
          <span className="card-decoration">✦</span>
        </article>

        <article className="dashboard-card">
          <div className="card-symbol">↗</div>
          <p className="card-label">02 — YOUR MOMENTUM</p>
          <h3>Progress, not perfection.</h3>
          <p>
            Every small step counts. Keep going
            and give your ideas room to grow.
          </p>
          <div className="progress-art">
            <span /><span /><span /><span /><span /><span />
          </div>
        </article>

        <article className="dashboard-card">
          <div className="card-symbol">♡</div>
          <p className="card-label">03 — YOUR PROFILE</p>
          <h3>You're connected.</h3>
          <p>
            Your Google profile is ready.
            This is the beginning of your experience.
          </p>
          <div className="connected-pill">
            <span className="online-dot" />
            Google connected
          </div>
        </article>
      </section>

      <footer className="footer">
        <span>LUMORA ✦</span>
        <span>Dream it. Build it. Become it.</span>
      </footer>
    </main>
  );
}

