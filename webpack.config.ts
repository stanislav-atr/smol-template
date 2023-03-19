import type { Configuration, WebpackPluginInstance } from 'webpack';
import path from 'path';
import chalk from 'chalk';
import CopyPlugin from 'copy-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import LicensePlugin from 'webpack-license-plugin';
import { BUILD_DIR } from './constants';

const { log } = console;

const BUILD_PATH = path.resolve(__dirname, BUILD_DIR);

const commonPlugins: WebpackPluginInstance[] = [
    new CopyPlugin({
        patterns: [
            { from: './src/index.html', to: BUILD_PATH },
        ],
    }),
    new CleanWebpackPlugin({
        protectWebpackAssets: false,
        cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
    }),
];

const config: Configuration = {
    entry: './src/index.tsx',
    output: {
        path: BUILD_PATH,
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
