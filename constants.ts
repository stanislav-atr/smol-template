const BUILD_DIR = 'dist';

enum Target {
    Tests = 'tests',
    Bundle = 'bundle',
}

enum Channel {
    Dev = 'development',
    Release = 'production',
}

// Map of resources to copy into bundle
const RESOURCE_WAYPOINTS = [
    /* Build results */
    { src: 'test/build/*', dest: '/test/build' },
    /* Tests page */
    { src: 'test/index.html', dest: '/test' },
    /* External resources */
];

export {
    BUILD_DIR,
    Target,
    Channel,
    RESOURCE_WAYPOINTS,
};
