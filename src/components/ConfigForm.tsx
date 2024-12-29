import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { dump } from 'js-yaml';
import { GraviteeConfig } from '../types/config';
import BasicConfig from './steps/BasicConfig';
import RedisConfig from './steps/RedisConfig';
import BridgeConfig from './steps/BridgeConfig';
import AwsConfig from './steps/AwsConfig';
import SecurityConfig from './steps/SecurityConfig';
import ElasticsearchConfig from './steps/ElasticsearchConfig';
import LogstashConfig from './steps/LogstashConfig';

const ConfigForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [gatewayVersion, setGatewayVersion] = useState('');
  const [config, setConfig] = useState<Partial<GraviteeConfig>>({
    dataplane: {
      api: { enabled: false },
      ui: { enabled: false },
      es: { enabled: false },
      reporters: {
        elasticsearch: { enabled: false }
      },
      portal: { enabled: false },
      smtp: { enabled: false },
      ratelimit: { type: 'redis' },
      management: { type: 'http' }
    }
  });

  const steps = [
    { title: 'Basic Configuration', component: BasicConfig },
    { title: 'Redis Configuration', component: RedisConfig },
    { title: 'Bridge Configuration', component: BridgeConfig },
    { title: 'AWS Configuration', component: AwsConfig },
    { title: 'Security Configuration', component: SecurityConfig },
    { title: 'Elasticsearch Configuration', component: ElasticsearchConfig },
    { title: 'Logstash Configuration', component: LogstashConfig }
  ];

  const generateYaml = () => {
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

  const CurrentStepComponent = steps[step - 1].component;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">Gravitee.io Helm Configuration Generator</h1>
        
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((s, index) => (
              <div
                key={s.title}
                className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step > index + 1 ? 'bg-green-500' : step === index + 1 ? 'bg-blue-500' : 'bg-gray-300'
                  } text-white`}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 h-1 mx-2 bg-gray-300">
                    <div
                      className={`h-full ${step > index + 1 ? 'bg-green-500' : 'bg-gray-300'}`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            {steps.map((s) => (
              <span key={s.title}>{s.title}</span>
            ))}
          </div>
        </div>

        <CurrentStepComponent
          config={config}
          setConfig={setConfig}
          customerName={customerName}
          setCustomerName={setCustomerName}
          gatewayVersion={gatewayVersion}
          setGatewayVersion={setGatewayVersion}
        />

        <div className="mt-6 flex justify-between">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Previous
            </button>
          )}
          
          <div className="flex-1" />
          
          {step < steps.length ? (
            <button
              onClick={() => setStep(step + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <button
              onClick={generateYaml}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Generate YAML
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfigForm;