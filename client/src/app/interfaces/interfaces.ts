export interface Task {
    id: number;
    title: string;
    status_id: number;
    status: Status;
}

export interface Status {
    id: number;
    name: string;
}