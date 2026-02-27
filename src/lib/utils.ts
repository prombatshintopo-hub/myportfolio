import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

// Simple deterministic string hash -> number
export function hashToNumber(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

export function gradientFromSeed(seed: string) {
  const n = hashToNumber(seed);
  const a = n % 360;
  const b = (a + 42 + (n % 44)) % 360;
  const c = (b + 62 + (n % 38)) % 360;

  return [
    `radial-gradient(circle at 20% 18%, hsl(${a} 88% 58% / 0.42), transparent 40%)`,
    `radial-gradient(circle at 84% 0%, hsl(${b} 80% 45% / 0.30), transparent 38%)`,
    `linear-gradient(142deg, hsl(${a} 76% 34%), hsl(${b} 82% 28%), hsl(${c} 78% 24%))`
  ].join(', ');
}
