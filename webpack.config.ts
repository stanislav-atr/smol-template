import type { Configuration, WebpackPluginInstance } from 'webpack';
import chalk from 'chalk';
import CopyPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import LicensePlugin from 'webpack-license-plugin';
import { Path, ResourceWaypoint } from './constants';

const { log } = console;

const commonPlugins: WebpackPluginInstance[] = [
    new CopyPlugin({
        patterns: [
            ResourceWaypoint.IndexPage,
            ResourceWaypoint.Assets,
        ],
    }),
    new CleanWebpackPlugin({
        protectWebpackAssets: false,
        cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
    }),
];

const config: Configuration = {
    devtool: 'source-map',
    entry: './src/index.tsx',
    output: {
        path: Path.Build,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ],
    },
};

export default (env, argv) => {
    const { mode } = argv;
    log(chalk.magentaBright(`Starting ${mode} build...`));

    const plugins = commonPlugins;

    if (mode === 'production') {
        plugins.push(new LicensePlugin({
            excludedPackageTest: (packageName) => packageName.startsWith('@internal/'),
            outputFilename: 'meta/licenses.json',
            unacceptableLicenseTest: (licenseIdentifier) => ['GPL', 'AGPL', 'LGPL', 'NGPL'].includes(licenseIdentifier),
        }));
    }

    // if (mode === 'development') {

    // }

    config.plugins = plugins;

    return config;
};
