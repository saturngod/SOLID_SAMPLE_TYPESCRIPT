import { Openable, Saveable, Printable, ConvertibleToPDF, Resizable } from "./Interfaces";

export class ImageDocument implements Openable, Saveable, Printable, ConvertibleToPDF, Resizable {
    open(): void {
        console.log("Opening Image document.");
    }

    close(): void {
        console.log("Closing Image document.");
    }

    save(): void {
        console.log("Saving Image document.");
    }

    print(): void {
        console.log("Printing Image document.");
    }

    convertToPDF(): void {
        console.log("Converting Image document to PDF.");
    }
    
    //not supported in PDF and Word
    resize(): void {
        console.log("Resizing Image document.");
    }
}