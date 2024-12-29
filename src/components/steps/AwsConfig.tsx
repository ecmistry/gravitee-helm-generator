import React from 'react';
import { GraviteeConfig } from '../../types/config';

interface Props {
  config: Partial<GraviteeConfig>;
  setConfig: (config: Partial<GraviteeConfig>) => void;
}

const AwsConfig: React.FC<Props> = ({ config, setConfig }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">AWS Configuration</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">AWS Access Key ID</label>
        <input
          type="text"
          value={config.logstash?.extraEnvs?.find(env => env.name === 'S3_ACCESS_KEY_ID')?.value || ''}
          onChange={(e) => {
            const newExtraEnvs = [...(config.logstash?.extraEnvs || [])];
            const index = newExtraEnvs.findIndex(env => env.name === 'S3_ACCESS_KEY_ID');
            if (index >= 0) {
              newExtraEnvs[index] = { name: 'S3_ACCESS_KEY_ID', value: e.target.value };
            } else {
              newExtraEnvs.push({ name: 'S3_ACCESS_KEY_ID', value: e.target.value });
            }
            setConfig({
              ...config,
              logstash: {
                ...config.logstash,
                extraEnvs: newExtraEnvs
              }
            });
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">AWS Secret Access Key</label>
        <input
          type="password"
          value={config.logstash?.extraEnvs?.find(env => env.name === 'S3_SECRET_ACCESS_KEY')?.value || ''}
          onChange={(e) => {
            const newExtraEnvs = [...(config.logstash?.extraEnvs || [])];
            const index = newExtraEnvs.findIndex(env => env.name === 'S3_SECRET_ACCESS_KEY');
            if (index >= 0) {
              newExtraEnvs[index] = { name: 'S3_SECRET_ACCESS_KEY', value: e.target.value };
            } else {
              newExtraEnvs.push({ name: 'S3_SECRET_ACCESS_KEY', value: e.target.value });
            }
            setConfig({
              ...config,
              logstash: {
                ...config.logstash,
                extraEnvs: newExtraEnvs
              }
            });
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">S3 Region</label>
        <input
          type="text"
          value={config.logstash?.extraEnvs?.find(env => env.name === 'S3_REGION')?.value || ''}
          onChange={(e) => {
            const newExtraEnvs = [...(config.logstash?.extraEnvs || [])];
            const index = newExtraEnvs.findIndex(env => env.name === 'S3_REGION');
            if (index >= 0) {
              newExtraEnvs[index] = { name: 'S3_REGION', value: e.target.value };
            } else {
              newExtraEnvs.push({ name: 'S3_REGION', value: e.target.value });
            }
            setConfig({
              ...config,
              logstash: {
                ...config.logstash,
                extraEnvs: newExtraEnvs
              }
            });
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="e.g., us-east-1"
        />
      </div>
    </div>
  );
};

export default AwsConfig;