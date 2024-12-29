import React from 'react';
import { GraviteeConfig } from '../../types/config';

interface Props {
  config: Partial<GraviteeConfig>;
  setConfig: (config: Partial<GraviteeConfig>) => void;
}

const ElasticsearchConfig: React.FC<Props> = ({ config, setConfig }) => {
  const [enabled, setEnabled] = React.useState(false);

  const handleElasticsearchToggle = (isEnabled: boolean) => {
    setEnabled(isEnabled);
    setConfig({
      ...config,
      dataplane: {
        ...config.dataplane,
        reporters: {
          elasticsearch: {
            enabled: isEnabled
          }
        }
      }
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Elasticsearch Configuration</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Enable Elasticsearch?</label>
        <div className="mt-2">
          <button
            onClick={() => handleElasticsearchToggle(true)}
            className={`mr-2 px-4 py-2 rounded ${enabled ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          >
            Yes
          </button>
          <button
            onClick={() => handleElasticsearchToggle(false)}
            className={`px-4 py-2 rounded ${!enabled ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElasticsearchConfig;