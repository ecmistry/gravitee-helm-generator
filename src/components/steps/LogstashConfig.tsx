import React from 'react';
import { GraviteeConfig } from '../../types/config';

interface Props {
  config: Partial<GraviteeConfig>;
  setConfig: (config: Partial<GraviteeConfig>) => void;
}

const LogstashConfig: React.FC<Props> = ({ config, setConfig }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Logstash Configuration</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Image Tag</label>
        <input
          type="text"
          value={config.logstash?.imageTag || ''}
          onChange={(e) => setConfig({
            ...config,
            logstash: {
              ...config.logstash,
              imageTag: e.target.value
            }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="e.g., 8.14.1"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Replicas</label>
        <input
          type="number"
          value={config.logstash?.replicas || 1}
          onChange={(e) => setConfig({
            ...config,
            logstash: {
              ...config.logstash,
              replicas: parseInt(e.target.value)
            }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          min="1"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">CPU Request</label>
        <input
          type="text"
          value={config.logstash?.resources?.requests?.cpu || ''}
          onChange={(e) => setConfig({
            ...config,
            logstash: {
              ...config.logstash,
              resources: {
                ...config.logstash?.resources,
                requests: {
                  ...config.logstash?.resources?.requests,
                  cpu: e.target.value
                }
              }
            }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="e.g., 500m"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Memory Request</label>
        <input
          type="text"
          value={config.logstash?.resources?.requests?.memory || ''}
          onChange={(e) => setConfig({
            ...config,
            logstash: {
              ...config.logstash,
              resources: {
                ...config.logstash?.resources,
                requests: {
                  ...config.logstash?.resources?.requests,
                  memory: e.target.value
                }
              }
            }
          })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="e.g., 2048Mi"
        />
      </div>
    </div>
  );
};

export default LogstashConfig;