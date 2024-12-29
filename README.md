## Gravitee.io Helm Configuration Generator

This application helps generate Helm configuration files for Gravitee.io installations.

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gravitee-helm-generator
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Features

- Step-by-step configuration wizard
- Basic configuration settings
- Redis configuration
- Bridge configuration
- AWS configuration
- Security settings
- Elasticsearch configuration
- Logstash configuration
- YAML file generation

### Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Input.tsx
│   └── steps/        # Configuration step components
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── App.tsx          # Main application component
```

### Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

### License

MIT