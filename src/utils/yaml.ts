import { dump } from 'js-yaml';
import { GraviteeConfig } from '../types/config';

export const generateYamlFile = (
  config: Partial<GraviteeConfig>,
  customerName: string
): void => {
  const yaml = dump(config);
  const blob = new Blob([yaml], { type: 'text/yaml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `values.${customerName}.yaml`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};