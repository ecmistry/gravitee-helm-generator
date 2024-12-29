export interface GraviteeConfig {
  dataplane: {
    api: { enabled: boolean };
    ui: { enabled: boolean };
    es: { enabled: boolean };
    reporters: {
      elasticsearch: { enabled: boolean };
    };
    portal: { enabled: boolean };
    smtp: { enabled: boolean };
    ratelimit: { type: string };
    management: { type: string };
    gateway: {
      image: {
        repository: string;
        tag: string;
      };
      ratelimit: {
        redis: {
          host: string;
          port: number;
          password: string;
          ssl: boolean;
        };
      };
      autoscaling: { enabled: boolean };
      replicaCount: number;
      ingress: {
        path: string;
        hosts: string[];
        tls: Array<{
          hosts: string[];
          secretName: string;
        }>;
        annotations: Record<string, string>;
      };
      reporters: {
        elasticsearch: { enabled: boolean };
        tcp: {
          enabled: boolean;
          host: string;
          port: number;
          output: string;
        };
      };
      management: {
        http: {
          url: string;
          username: string;
          password: string;
          keepAlive: boolean;
          idleTimeout: number;
          connectTimeout: number;
          readTimeout: number;
          useCompression: boolean;
          version: string;
          connectionRetry: {
            delaySec: number;
            maxDelaySec: number;
            backoffFactor: number;
          };
        };
      };
      sharding_tags: string;
      env: Array<{
        name: string;
        value: string;
      }>;
    };
  };
  logstash: {
    image: string;
    imageTag: string;
    replicas: number;
    resources: {
      requests: {
        cpu: string;
        memory: string;
      };
      limits: {
        cpu: string;
        memory: string;
      };
    };
    extraEnvs: Array<{
      name: string;
      value: string;
    }>;
    logstashConfig: {
      'logstash.yml': string;
    };
    logstashPipeline: {
      'logstash.yml': string;
    };
  };
}