import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#000020", // deep dark blue
          },
        },
        particles: {
          color: {
            value: "#ffffff", // snow/white dots
          },
          move: {
            direction: "bottom",
            enable: true,
            outModes: {
              default: "out",
            },
            speed: 2,
          },
          number: {
            value: 100,
          },
          opacity: {
            value: 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;
