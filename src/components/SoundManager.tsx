import React, { createContext, useContext, useCallback } from 'react';

interface SoundContextType {
  playHover: () => void;
  playClick: () => void;
  playSuccess: () => void;
  playTransition: () => void;
}

const SoundContext = createContext<SoundContextType | null>(null);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  // Create audio instances with Web Audio API for better performance
  const createAudioContext = useCallback(() => {
    if (typeof window === 'undefined') return null;
    
    try {
      return new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch {
      return null;
    }
  }, []);

  const playTone = useCallback((frequency: number, duration: number, volume: number = 0.1) => {
    const audioContext = createAudioContext();
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  }, [createAudioContext]);

  const playHover = useCallback(() => {
    playTone(800, 0.1, 0.05);
  }, [playTone]);

  const playClick = useCallback(() => {
    playTone(600, 0.15, 0.08);
  }, [playTone]);

  const playSuccess = useCallback(() => {
    setTimeout(() => playTone(523, 0.1, 0.06), 0);
    setTimeout(() => playTone(659, 0.1, 0.06), 100);
    setTimeout(() => playTone(784, 0.2, 0.06), 200);
  }, [playTone]);

  const playTransition = useCallback(() => {
    playTone(440, 0.3, 0.04);
  }, [playTone]);

  return (
    <SoundContext.Provider value={{
      playHover,
      playClick,
      playSuccess,
      playTransition
    }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    return {
      playHover: () => {},
      playClick: () => {},
      playSuccess: () => {},
      playTransition: () => {}
    };
  }
  return context;
}