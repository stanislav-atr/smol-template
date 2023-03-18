const BUILD_DIR = 'build';

enum Target {
    Tests = 'tests',
    Bundle = 'bundle',
}

enum Channel {
    Dev = 'dev',
    Beta = 'beta',
    Release = 'release',
}

const CHANNEL_BASE_URLS = {
    [Channel.Dev]: 'https://AdguardTeam.github.io/PopupBlocker/',
    [Channel.Beta]: 'https://userscripts.adtidy.org/beta/popup-blocker/2.5/',
    [Channel.Release]: 'https://userscripts.adtidy.org/release/popup-blocker/2.5/',
};

// Used in userscript metadata
const RESOURCE_PATHS = [
    './assets/fonts/bold/OpenSans-Bold.woff',
    './assets/fonts/bold/OpenSans-Bold.woff2',
    './assets/fonts/regular/OpenSans-Regular.woff',
    './assets/fonts/regular/OpenSans-Regular.woff2',
    './assets/fonts/semibold/OpenSans-Semibold.woff',
    './assets/fonts/semibold/OpenSans-Semibold.woff2',
];

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
    CHANNEL_BASE_URLS,
    RESOURCE_PATHS,
    RESOURCE_WAYPOINTS,
};
