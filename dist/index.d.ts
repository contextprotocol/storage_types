import * as registryABI from './ContextRegistry.json';
import * as tokenABI from './ContextToken.json';
export { registryABI, tokenABI };
export declare enum Connection {
    LOCALHOST = 1,
    POLYGON = 2,
    MUMBAI = 3
}
export declare enum Version {
    MAJOR = 1,
    MINOR = 2,
    PATCH = 3
}
export interface Data {
    [key: string]: any;
}
export interface Schema {
    [key: string]: string;
}
export type ActionType = 'write' | 'update' | 'push' | 'delete' | 'install' | 'uninstall';
export interface Action {
    action: ActionType;
    path?: string;
    data?: any;
}
export interface Tag {
    name: string;
    value: string;
}
export interface StorageVersion {
    actions: Action[];
    prevDocId: string;
    comments?: string;
    tags?: Tag[];
    format?: string;
    signature?: any;
}
export interface StorageObject {
    /**
     * Writes data to the storage.
     * @param data - The data to be stored.
     * @param prevDocId - (Optional) The ID of the previous document.
     * @param tags - (Optional) Any tags associated with the document.
     * @returns { docId, cost, kilobytes }
     * @throws Will throw an error if an error occurs
     */
    write(data: StorageVersion): Promise<{
        docId: string;
        cost: number;
        kilobytes: number;
    }>;
    /**
     * Reads a document from the storage.
     * @param docId - The ID of the document to be retrieved.
     * @returns A promise that resolves to the requested document.
     * @throws Will throw an error if an error occurs
     */
    read(docId: string): Promise<StorageVersion>;
}
