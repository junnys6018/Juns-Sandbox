import Module, { VoxelSpaceModule } from './voxel-space';
import wasmUrl from './voxel-space.wasm';
import dataUrl from './voxel-space.data';

export interface VoxelSpaceApi {
    createContext: (colorMap: string, depthMap: string, background: number) => number;
    destroyContext: (context: number) => void;
    render: (
        context: number,
        width: number,
        height: number,
        phi: number,
        xpos: number,
        ypos: number,
        pitch: number,
        cameraHeight: number,
    ) => number;
}

// Since webpack will change the name and potentially the path of the
// `.wasm` and `.data` file, we have to provide a `locateFile()` hook to redirect
// to the appropriate URL.
// More details: https://kripken.github.io/emscripten-site/docs/api_reference/module.html
const voxelSpaceApi: Promise<[VoxelSpaceModule, VoxelSpaceApi]> = Module({
    locateFile(path) {
        if (path.endsWith('.wasm')) {
            return wasmUrl;
        } else if (path.endsWith('.data')) {
            return dataUrl;
        }
        return path;
    },
}).then(instance => {
    const api: VoxelSpaceApi = {
        createContext: instance.cwrap('create_voxel_space_context', 'number', ['string', 'string', 'number']),
        destroyContext: instance.cwrap('destroy_voxel_space_context', null, ['number']),
        render: instance.cwrap('render_voxel_space', 'number', [
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
        ]),
    };

    return [instance, api];
});

export default voxelSpaceApi;
