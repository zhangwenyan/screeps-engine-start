import cp from 'child_process';
import path from 'path';
async function startProcess(name, execPath) {
    console.log('startProcess', name, execPath);
    cp.fork(path.resolve(execPath), {
        env: {
            STORAGE_PORT: 27017,
            DRIVER_MODULE: '@screeps/driver'
        }
    });
}

startProcess('engine_main',
    path.resolve(path.dirname(require.resolve('@screeps/engine')), 'main.js')
)
