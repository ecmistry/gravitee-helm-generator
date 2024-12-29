import { GraviteeConfig } from '../types/config';

export const updateConfigPath = (
  config: Partial<GraviteeConfig>,
  path: string[],
  value: any
): Partial<GraviteeConfig> => {
  const newConfig = { ...config };
  let current: any = newConfig;
  
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    current[key] = current[key] ? { ...current[key] } : {};
    current = current[key];
  }
  
  current[path[path.length - 1]] = value;
  return newConfig;
};

export const getConfigValue = (
  config: Partial<GraviteeConfig>,
  path: string[]
): any => {
  let current: any = config;
  
  for (const key of path) {
    if (!current || typeof current !== 'object') return undefined;
    current = current[key];
  }
  
  return current;
};