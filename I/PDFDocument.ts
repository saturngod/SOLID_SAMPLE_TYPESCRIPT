import { Openable, Saveable, Printable, ConvertibleToPDF } from "./Interfaces";

export class PDFDocument implements Openable, Saveable, Printable, ConvertibleToPDF {
    open(): void {
        console.log("Opening PDF document.");
    }

    close(): void {
        console.log("Closing PDF document.");
    }

    save(): void {
        console.log("Saving PDF document.");
    }

    print(): void {
        console.log("Printing PDF document.");
    }

    convertToPDF(): void {
        console.log("PDF document is already in PDF format.");
    }

    resize(): void {
        // Not applicable for PDF
        throw new Error("Resize operation not supported for PDF documents.");
    }
}




