/**
 * Created by user on 2019/6/6.
 */
export declare type IURLLike = string | URL | IURLObjectLike;
export declare const SYM_URL: unique symbol;
export declare const SYM_HIDDEN: unique symbol;
export declare class LazyURL extends URL implements URL {
    protected [SYM_URL]?: URL;
    protected [SYM_HIDDEN]: Partial<URL>;
    static create(url: IURLLike | [IURLLike, IURLLike?], base?: IURLLike): LazyURL;
    constructor(url: IURLLike | [IURLLike, IURLLike?], base?: IURLLike);
    readonly paths: any;
    fakeExists(): number;
    fakeKeys(): string[];
    fakeEntries(): [string, string | URLSearchParams | (() => string)][];
    /**
     * get the real url (remove fake value)
     * throw error if not a valid url
     *
     * @returns {string}
     */
    toRealString(): string;
    toString(): string;
    hostname: string;
    protocol: string;
    /**
     * @alias protocol
     */
    /**
    * @alias protocol
    */
    scheme: string;
    /**
     * @alias hash
     */
    /**
    * @alias hash
    */
    fragment: string;
    /**
     * @alias search
     */
    /**
    * @alias search
    */
    query: string;
    /**
     * clone into a object
     *
     * @returns {IURLObject}
     */
    toObject(url: URL): IURLObject;
    static toObject(url: URL): IURLObject;
    keys(): IUrlKeys[];
    values(): (string | URLSearchParams)[];
    entries(): IEntries;
    static keys(): IUrlKeys[];
    static values(url: URL): (string | URLSearchParams)[];
    static entries(url: URL): IEntries;
    createURLSearchParams(init?: string[][] | Record<string, string> | string | URLSearchParams | URL): URLSearchParams;
}
export declare type IEntries = (["hash" | "host" | "hostname" | "href" | "password" | "pathname" | "port" | "protocol" | "search" | "username", string] | ["searchParams", URLSearchParams])[];
export declare type IEntriesRow<T extends IUrlKeys> = [T, URL[T]];
export declare type IUrlKeys = 'href' | 'username' | 'password' | 'host' | 'hostname' | 'port' | 'pathname' | 'search' | 'searchParams' | 'protocol' | 'hash';
export declare class URLSearchParamsLazy extends URLSearchParams implements URLSearchParams {
    clone(): URLSearchParamsLazy;
}
export declare function findSymbolContext(): symbol;
export interface IURLObjectLike {
    href: string;
}
export interface IURLObject {
    href: string;
    protocol: string;
    username: string;
    password: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    searchParams: URLSearchParams;
    hash: string;
}
export declare function _core(url: IURLLike | [IURLLike, IURLLike?], base?: IURLLike): {
    url: URL;
    hidden: Partial<URL>;
};
export default LazyURL;
