import React from 'react';
import { GraviteeConfig } from '../../types/config';

interface Props {
  customerName: string;
  setCustomerName: (name: string) => void;
  gatewayVersion: string;
  setGatewayVersion: (version: string) => void;
  config: Partial<GraviteeConfig>;
  setConfig: (config: Partial<GraviteeConfig>) => void;
}

const BasicConfig: React.FC<Props> = ({
  customerName,
  setCustomerName,
  gatewayVersion,
  setGatewayVersion,
  config,
  setConfig,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Basic Configuration</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Customer Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="e.g., my-company"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Gateway Version</label>
        <input
          type="text"
          value={gatewayVersion}
          onChange={(e) => {
            setGatewayVersion(e.target.value);
            setConfig({
              ...config,
              dataplane: {
                ...config.dataplane,
                gateway: {
                  ...config.dataplane?.gateway,
                  image: {
                    repository: 'graviteeio/apim-gateway',
                    tag: e.target.value
                  }
                }
              }
            });
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="e.g., 3.20.0"
        />
      </div>
    </div>
  );
};

export default BasicConfig;