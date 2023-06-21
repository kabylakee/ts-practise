enum TransferStatus {
	Pending = "pending",
	Rejected = "rejected",
	Completed = "completed",
}

enum ErrorMessages {
	NotFound = "Not found: 404",
	NotEnoughSpace = "Not enough space: 507",
	Forbidden = "Forbidden: 403",
}

interface ITransfer {
	path: string;
	data: string[];
	date?: Date;
	start: (p: string, d: string[]) => string;
	stop: (reason: string) => string;
}

interface ITransferError {
	message: ErrorMessages;
}

class SingleFileTransfer implements ITransfer, ITransferError{
	path: string;
	data: string[];
	date?: Date = new Date();
	message: ErrorMessages = ErrorMessages.NotFound;
	transferStatus!: TransferStatus;

	constructor(status: TransferStatus, data: string[], path: string) {
		this.transferStatus = status;
		this.data = data;
		this.path = path;
	}

	start(path: string, data: string[]): string {
        return `Transfer started: ${path ? 'on' + path : "without path"}, data: ${data ? data : 'no data'}`;
    }

	checkTransferStatus(): string {
		this.start(this.path, this.data);
		
		if (this.data.some(d => !d)) {
			return this.stop(this.message);
		} else {
			return `Data delivered: ${this.data}`;
		}
	}

	stop(reason: string): string {
		this.makeError();
		return `Problem: ${reason}, Data: ${this.date?.toTimeString()}`;
	}

	makeError (): string {
        return `Status: ${TransferStatus.Rejected}, error message: ${ErrorMessages.Forbidden}`
    }
}

const transfer = new SingleFileTransfer(TransferStatus.Pending, ['test', 'test1', '', 'test2'], "https://test");
console.log(transfer.checkTransferStatus());
console.log(transfer.data);
console.log(transfer.path);

