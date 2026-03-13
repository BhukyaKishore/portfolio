import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        let animationFrameId;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        const particles = Array.from({ length: 120 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 2 + 0.5,
            baseX: (Math.random() - 0.5) * 1,
            baseY: (Math.random() - 0.5) * 1,
            opacity: Math.random() * 0.8 + 0.2,
        }));

        const drawRibbon = (offsetY, colorStart, colorEnd, phase, strands, scaleY, density) => {
            const width = canvas.width;

            const gradient = ctx.createLinearGradient(0, 0, width, 0);
            gradient.addColorStop(0, colorStart);
            gradient.addColorStop(1, colorEnd);

            ctx.strokeStyle = gradient;

            for (let i = 0; i < strands; i++) {
                ctx.beginPath();
                const localPhase = phase + i * density + time;

                for (let x = 0; x <= width; x += 15) {
                    const nx = x / width;
                    const y = (Math.sin(nx * 3 + localPhase) * 200) +
                        (Math.sin(nx * 2 - localPhase * 1.5) * 120) +
                        (Math.sin(nx * 5 + time) * 50);

                    const finalY = (canvas.height * offsetY) + (y * scaleY) + (i * 2.5);

                    if (x === 0) {
                        ctx.moveTo(x, finalY);
                    } else {
                        ctx.lineTo(x, finalY);
                    }
                }

                ctx.lineWidth = i % 5 === 0 ? 2 : 1;
                ctx.globalAlpha = 0.15 + (Math.sin(time * 3 + i * 0.1) * 0.05);
                ctx.stroke();
            }
        };

        const render = () => {
            time += 0.0025;

            const bgGrad = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, canvas.width
            );
            
            if (theme === 'dark') {
                bgGrad.addColorStop(0, '#0f1117');
                bgGrad.addColorStop(1, '#08090d');
            } else {
                bgGrad.addColorStop(0, '#ffffff');
                bgGrad.addColorStop(1, '#f0f3f5');
            }
            
            ctx.fillStyle = bgGrad;
            ctx.globalAlpha = 1;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Reverting to Cyan and Purple ribbons
            const ribbonAlpha = theme === 'dark' ? '0.3' : '0.6';
            drawRibbon(0.5, 'rgba(255,255,255,0)', `rgba(0, 212, 255, ${ribbonAlpha})`, 0, 70, 1.4, 0.02);

            const intenseAlpha = theme === 'dark' ? '0.4' : '0.7';
            drawRibbon(0.52, 'rgba(255,255,255,0)', `rgba(124, 58, 237, ${intenseAlpha})`, Math.PI / 6, 80, 1.8, 0.02);

            const frontStart = theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.9)';
            drawRibbon(0.55, frontStart, 'rgba(150,150,150,0)', Math.PI / 4, 90, 1.6, 0.01);

            ctx.globalAlpha = 1;
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none -z-10"
            style={{ width: '100vw', height: '100vh' }}
        />
    );
};

export default AnimatedBackground;
