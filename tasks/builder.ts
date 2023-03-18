import * as fs from 'fs-extra';
import chalk from 'chalk';
import { program } from 'commander';
import path from 'path';
import { BUILD_DIR, Target } from './constants';

const BUILD_PATH = path.resolve(__dirname, BUILD_DIR);

const { log } = console;

const build = async (config, target: Target) => {
    log(chalk.yellow(`Building ${target}...`));

    // FIXME usewebpack
    // const bundle = await rollup(config);

    // const { output } = config;
    // if (output && !Array.isArray(output)) {
    //     await bundle.write(output);
    // }

    log(chalk.green(`Successfully built ${target}.`));
};

const buildTests = async () => {
    // await build(testsConfig, Target.Tests);
};

const buildBundle = async () => {
    log(chalk.yellow('Start bundling...'));

    log(chalk.green('Bundle built successfully.'));
};

const tasksMap = {
    [Target.Tests]: buildTests,
    [Target.Bundle]: buildBundle,
};

const runTask = async (task: ()=> Promise<void>) => {
    try {
        await fs.remove(BUILD_PATH);
        await task();
    } catch (e) {
        log(chalk.redBright(`Failed at task '${task.name}':`));
        log(chalk.red(e.toString()));
    }
};

program
    .description('Build target')
    .option('--target <string>')
    .action(async (options) => {
        const { target } = options;
        await runTask(tasksMap[target]);
    });

program.parse(process.argv);
