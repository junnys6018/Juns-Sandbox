export interface VoxelSpaceModule extends EmscriptenModule {
    cwrap: typeof cwrap;
}

declare const Module: EmscriptenModuleFactory<VoxelSpaceModule>;

export default Module;
