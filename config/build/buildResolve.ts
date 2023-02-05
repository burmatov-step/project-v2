import { BuildOptions } from './types/config';
import webpack from 'webpack';

export function buildResolve(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {} 
    }
}