import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Updated Import
import { loadSlim } from "@tsparticles/slim"; // Use the scoped package

const BackgroundParticles = () => {
    const [init, setInit] = useState(false);

    // Initialization hook for the engine
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // console.log(container);
    }, []);

    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1 // CRUCIAL: Puts the canvas behind all other content
                }}
                options={{
                background: {
                    color: {
                        value: "#121212", // Matches your body background
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: { enable: true, mode: "push" },
                        onHover: { enable: true, mode: "repulse" },
                    },
                    modes: {
                        push: { quantity: 4 },
                        repulse: { distance: 100, duration: 0.4 },
                    },
                },
                particles: {
                    color: {
                        value: ["#1E90FF", "#FFD700", "#dc3545"], // Blue, Gold, Red (Tournament colors)
                    },
                    links: {
                        color: "#444",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: { default: "bounce" },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: { enable: true, area: 800 },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}

    return null; // Don't render until initialized
};

export default BackgroundParticles;