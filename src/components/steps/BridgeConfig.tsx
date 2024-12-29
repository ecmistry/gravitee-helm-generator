import React from 'react';
import { GraviteeConfig } from '../../types/config';

interface Props {
  config: Partial<GraviteeConfig>;
  setConfig: (config: Partial<GraviteeConfig>) => void;
}

const BridgeConfig: React.FC<Props> = ({ config, setConfig }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Bridge Configuration</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Bridge Username</label>
        <input
          type="text"
          value={config.dataplane?.gateway?.management?.http?.username || ''}
          onChange={(e) => setConfig({
            ...config,
            dataplane: {
              ...config.dataplane,
              gateway: {
                ...config.dataplane?.gateway,
                management: {
                  http: {
                    ...config.dataplane?.gateway?.management?.http,
                    username: e.target.value
                  }
                }
              }
            }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Bridge Password</label>
        <input
          type="password"
          value={config.dataplane?.gateway?.management?.http?.password || ''}
          onChange={(e) => setConfig({
            ...config,
            dataplane: {
              ...config.dataplane,
              gateway: {
                ...config.dataplane?.gateway,
                management: {
                  http: {
                    ...config.dataplane?.gateway?.management?.http,
                    password: e.target.value
                  }
                }
              }
            }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default BridgeConfig;