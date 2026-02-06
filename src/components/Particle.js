import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            area: 1500, // Changed from value_area
          },
        },
        line_linked: {
          enable: false,
          opacity: 0.03,
        },
        move: {
          direction: "right",
          speed: 0.05,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.05,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            particles_nb: 1,
          },
        },
      },
      retina_detect: true,
    }),
    []
  );

  if (!init) {
    return null;
  }

  return <Particles id="tsparticles" options={options} />;
}

export default Particle;