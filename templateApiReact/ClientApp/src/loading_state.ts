export type LoadingState= {
    status: LoadingStatus;
    canExecute: boolean;
    message?:string;
}

export type LoadingStatus = "idle" | "pending" | "success" | "warning" | "error";