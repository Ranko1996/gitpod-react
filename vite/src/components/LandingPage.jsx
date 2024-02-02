import React from 'react';

const LandingPage = () => {
  const containerStyle = {
    position: 'relative',
    height: '100vh', // 100% visine prozora preglednika
    overflow: 'hidden',
  };

  const backgroundImageStyle = {
    width: '100vw', // 100% širine preglednika
    height: '100%',
    objectFit: 'cover', // Omogućava da slika prekrije cijeli div
    // position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1, // Postavljanje pozadinske slike ispod sadržaja
  };

  const welcomeTitleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontSize: '3rem',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Prilagodite boju pozadine i prozirnost
    padding: '20px', // Dodajte dodatni padding kako biste poboljšali čitljivost
    borderRadius: '10px', // Dodajte zaobljenost rubova
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
        style={backgroundImageStyle}
      />
      <h1 style={welcomeTitleStyle}>Welcome to Akeba Tech</h1>
    </div>
  );
};

export default LandingPage;