'use client';

import { useState, useCallback } from 'react';
import { useScramble } from 'use-scramble';

function toScrambled(text: string): string {
    const chars = '!@#$%^&*<>/|[]{}~';
    return Array.from(text)
        .map(c => c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)])
        .join('');
}

export function ScrambleText({ text }: { text: string }) {
    const [target, setTarget] = useState(text);
    const [hovered, setHovered] = useState(false);

    const { ref } = useScramble({
        text: target,
        speed: hovered ? 1 : 0.6,
        tick: 1,
        step: 1,
        scramble: hovered ? 5 : 12,
        seed: 3,
        chance: 0.85,
        overdrive: true,
        range: [33, 126],
        ignore: [' '],
    });

    const handleMouseEnter = useCallback(() => {
        setHovered(true);
        setTarget(toScrambled(text));
    }, [text]);

    const handleMouseLeave = useCallback(() => {
        setHovered(false);
        setTarget(text);
    }, [text]);

    return <span ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />;
}
