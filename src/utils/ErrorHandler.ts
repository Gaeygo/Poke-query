type ErrorName = "NULL_POKE_VALUE"

class CustomError<T extends string> extends Error {
    // name: T;
    // message: string;
    // cause: any ;

    constructor({ name, message, stack }: {
        name: T;
        message: string;
        stack?: string;
    }) {
        super();
        this.name = name;
        this.message = message;
        this.stack = stack
    }
}

export class FetchError extends CustomError<ErrorName>{}