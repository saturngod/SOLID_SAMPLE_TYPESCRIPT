export interface Openable {
    open(): void;
    close(): void;
}

export interface Saveable {
    save(): void;
}

export interface Printable {
    print(): void;
}

export interface ConvertibleToPDF {
    convertToPDF(): void;
}

export interface Resizable {
    resize(): void;
}
