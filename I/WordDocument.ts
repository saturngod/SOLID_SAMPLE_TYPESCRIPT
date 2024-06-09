import { Openable, Saveable, Printable, ConvertibleToPDF } from "./Interfaces";

export class WordDocument implements Openable, Saveable, Printable, ConvertibleToPDF {
    open(): void {
        console.log("Opening Word document.");
    }

    close(): void {
        console.log("Closing Word document.");
    }

    save(): void {
        console.log("Saving Word document.");
    }

    print(): void {
        console.log("Printing Word document.");
    }

    convertToPDF(): void {
        console.log("Converting Word document to PDF.");
    }

    resize(): void {
        // Not applicable for Word
        throw new Error("Resize operation not supported for Word documents.");
    }
}