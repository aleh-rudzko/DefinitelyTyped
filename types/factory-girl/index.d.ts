// Type definitions for factory-girl 5.0
// Project: https://github.com/aexmachina/factory-girl
// Definitions by: Aleh Rudzko <https://github.com/aleh-rudzko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Initializer<T> = (buildOptions?: Partial<T>) => T;

interface Options<T, M, I> {
    afterBuild(Model: M, attrs?: any, buildOptions?: Partial<T>): Promise<I>;
    afterCreate(Model: M, attrs?: any, buildOptions?: Partial<T>): Promise<I>;
}

interface ExtendOptions<T, M, I> extends Options<T, M, I> {
    model?: M;
}

type Partial<T> = {
    [P in keyof T]?: T[P];
}

export declare class FactoryGirl {
    private options: any;
    constructor(options?: any);

    define<T, M, I>(name: string, Model: M, initilizer: T | Initializer<T>, options?: Options<T, M, I>): any;
    extend<T, M, I>(parent: string, name: string, childInitializer: T | Initializer<T>, options?: ExtendOptions<T, M, I>): any;
    attrs<T>(name: string, attrs: any, buildOptions?: Partial<T>): Promise<T>;
    build<T, I>(name: string, attrs: any, buildOptions?: Partial<T>): Promise<I>;
    create<T, I>(name: string, attrs?: any, buildOptions?: Partial<T>): Promise<I>;
    attrMany<T>(name: string, num: number, attrs: any[], buildOptions?: Partial<T>[]): Promise<T[]>;
    buildMany<T, I>(name: string, num: number, attrs: any[], buildOptions?: Partial<T>[]): Promise<I[]>;
    createMany<T, I>(name: string, num: number, attrs: any[], buildOptions?: Partial<T>[]): Promise<I[]>;
    withOptions<T, M, I>(options: Options<T, M, I>, merge?: boolean): void;
    setAdapter(adapter: any, factoryNames?: string | string[]): void;

    assoc<T, I, K extends keyof I>(name: string, key?: K, attrs?: any, buildOptions?: Partial<T>): (name: string, key?: K, attrs?: any, buildOptions?: Partial<T>) => Promise<I | I[K]>;
    assocMany<T, I, K extends keyof I>(name: string, key?: K[], attrs?: any[], buildOptions?: Partial<T>[]): (name: string, key?: K[], attrs?: any[], buildOptions?: Partial<T>[]) => Promise<I[] | I[K][]>;
    sequence(id?: string, callback?: (next: number) => number): (id?: string, callback?: (next: number) => number) => number;
}

declare const factory: FactoryGirl;
export { factory };
export default factory;
