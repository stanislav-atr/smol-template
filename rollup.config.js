import typescript from '@rollup/plugin-typescript';
import clear from 'rollup-plugin-clear';
import { terser } from "rollup-plugin-terser";

export default {
    input: 'src/app.ts',
    output: {
        file: './dist/bundle.js',
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [
        clear({
            targets: ['dist'],
            watch: true, // optional, whether clear the directores when rollup recompile on --watch mode.
        }),
        typescript(),
        terser(),
    ],
};