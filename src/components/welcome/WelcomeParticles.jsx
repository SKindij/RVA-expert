import Particles from 'react-tsparticles';

const App = () => {
  const particlesInit = (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {};
  return (
    <Particles
      id="tsparticles" init={particlesInit}
      loaded={particlesLoaded} width="21px"
      canvasClassName="canvas"
      options={{
        // background: { color: { value: '#2793FF' } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: 'push' },
            onHover: {
              enable: true, mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400, duration: 2,
              opacity: 0.8, size: 40,
            },
            push: { quantity: 4 },
            repulse: {
              distance: 200, duration: 0.4,
            },
          },
        },
        particles: {
          color: { value: '#ff9327' },
          links: {
            color: '#ff9327',
            distance: 150, enable: true,
            opacity: 0.5, width: 1,
          },
          collisions: { enable: true },
          move: {
            direction: 'none', enable: true,
            outMode: 'bounce', random: false,
            speed: 3, straight: false,
          },
          number: {
            density: {
              enable: true, value_area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 0.1,
          },
          shape: { type: 'circle' },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default App;
