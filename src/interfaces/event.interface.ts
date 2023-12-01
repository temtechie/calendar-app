
export interface IEvent {
    list: any[],
    title: string;
    date: string;
    time: string;
    eventData?: any;
    description?: string;
    loading?: boolean,
    error?: any,
    message?: string
}
