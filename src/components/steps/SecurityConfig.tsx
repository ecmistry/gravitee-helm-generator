import React from 'react';
import { GraviteeConfig } from '../../types/config';

interface Props {
  config: Partial<GraviteeConfig>;
  setConfig: (config: Partial<GraviteeConfig>) => void;
}

const SecurityConfig: React.FC<Props> = ({ config, setConfig }) => {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result?.toString().split(',')[1];
        if (base64) {
          const newEnv = [...(config.dataplane?.gateway?.env || [])];
          const index = newEnv.findIndex(env => env.name === 'license.key');
          if (index >= 0) {
            newEnv[index] = { name: 'license.key', value: base64 };
          } else {
            newEnv.push({ name: 'license.key', value: base64 });
          }
          setConfig({
            ...config,
            dataplane: {
              ...config.dataplane,
              gateway: {
                ...config.dataplane?.gateway,
                env: newEnv
              }
            }
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Security Configuration</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Encryption Secret</label>
        <input
          type="password"
          value={config.dataplane?.gateway?.env?.find(env => env.name === 'GRAVITEE_API_PROPERTIES_ENCRYPTION_SECRET')?.value || ''}
          onChange={(e) => {
            const newEnv = [...(config.dataplane?.gateway?.env || [])];
            const index = newEnv.findIndex(env => env.name === 'GRAVITEE_API_PROPERTIES_ENCRYPTION_SECRET');
            if (index >= 0) {
              newEnv[index] = { name: 'GRAVITEE_API_PROPERTIES_ENCRYPTION_SECRET', value: e.target.value };
            } else {
              newEnv.push({ name: 'GRAVITEE_API_PROPERTIES_ENCRYPTION_SECRET', value: e.target.value });
            }
            setConfig({
              ...config,
              dataplane: {
                ...config.dataplane,
                gateway: {
                  ...config.dataplane?.gateway,
                  env: newEnv
                }
              }
            });
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">License Key</label>
        <input
          type="file"
          onChange={handleFileUpload}
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100"
        />
      </div>
    </div>
  );
};

export default SecurityConfig;