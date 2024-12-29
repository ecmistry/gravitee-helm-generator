import React from 'react';
import { GraviteeConfig } from '../../types/config';

interface Props {
  config: Partial<GraviteeConfig>;
  setConfig: (config: Partial<GraviteeConfig>) => void;
}

const RedisConfig: React.FC<Props> = ({ config, setConfig }) => {
  const [enabled, setEnabled] = React.useState(false);

  const handleRedisToggle = (isEnabled: boolean) => {
    setEnabled(isEnabled);
    setConfig({
      ...config,
      dataplane: {
        ...config.dataplane,
        gateway: {
          ...config.dataplane?.gateway,
          ratelimit: {
            redis: {
              host: isEnabled ? 'redis-apim-master' : '',
              port: 6379,
              password: '',
              ssl: false
            }
          }
        }
      }
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Redis Configuration</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Enable Redis?</label>
        <div className="mt-2">
          <button
            onClick={() => handleRedisToggle(true)}
            className={`mr-2 px-4 py-2 rounded ${enabled ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          >
            Yes
          </button>
          <button
            onClick={() => handleRedisToggle(false)}
            className={`px-4 py-2 rounded ${!enabled ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          >
            No
          </button>
        </div>
      </div>
      {enabled && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700">Redis Host</label>
            <input
              type="text"
              value={config.dataplane?.gateway?.ratelimit?.redis?.host || ''}
              onChange={(e) => setConfig({
                ...config,
                dataplane: {
                  ...config.dataplane,
                  gateway: {
                    ...config.dataplane?.gateway,
                    ratelimit: {
                      redis: {
                        ...config.dataplane?.gateway?.ratelimit?.redis,
                        host: e.target.value
                      }
                    }
                  }
                }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="redis-apim-master"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Redis Password</label>
            <input
              type="password"
              value={config.dataplane?.gateway?.ratelimit?.redis?.password || ''}
              onChange={(e) => setConfig({
                ...config,
                dataplane: {
                  ...config.dataplane,
                  gateway: {
                    ...config.dataplane?.gateway,
                    ratelimit: {
                      redis: {
                        ...config.dataplane?.gateway?.ratelimit?.redis,
                        password: e.target.value
                      }
                    }
                  }
                }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default RedisConfig;