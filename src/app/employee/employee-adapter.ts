export interface Adapter<T> {
    adapt(employee: any): T;
}
