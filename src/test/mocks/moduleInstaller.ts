import { EventEmitter } from 'events';
import { Uri } from 'vscode';
import { IModuleInstaller } from '../../client/common/installer/types';

export class MockModuleInstaller extends EventEmitter implements IModuleInstaller {
    constructor(public readonly displayName: string, private supported: boolean) {
        super();
    }

    // eslint-disable-next-line class-methods-use-this
    public get name(): string {
        return 'mock';
    }

    // eslint-disable-next-line class-methods-use-this
    public get priority(): number {
        return 0;
    }

    public async installModule(name: string, _resource?: Uri): Promise<void> {
        this.emit('installModule', name);
    }

    public async isSupported(_resource?: Uri): Promise<boolean> {
        return this.supported;
    }
}
