
export interface IEvent {
    list: any[],
    title: string;
    date: string;
    time: string;
    description?: string;
    loading?: boolean,
    error?: any,
    message?: string
}
