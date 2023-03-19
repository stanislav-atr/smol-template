import path from 'path';

const BUILD_DIR = 'dist';
const Path = {
    Build: path.resolve(__dirname, BUILD_DIR),
} as const;

// Map of resources to copy into bundle
const ResourceWaypoint = {
    IndexPage: { from: './src/index.html', to: Path.Build },
    Assets: { from: 'src/assets', to: Path.Build },
} as const;

export {
    Path,
    ResourceWaypoint,
};
