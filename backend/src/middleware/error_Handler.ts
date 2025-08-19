import { Request , Response , NextFunction} from "express";


export function errorHandler (err: any , _req: Request , res: Response , _next: NextFunction) {

    const status = err.status || err.statusCode || 500;
    const code = err.code || "INERNAL_CODE_ERROR";

    // Prisma known errors cleanup
    if (err.name === "PrismaClientKnownRequestError") {

        if(err.code === "P2003") {
            return res.status(400).json({message: " Foreign key constraint failed" , code: err.code});

        }

        if(err.code === "P2002") {
            return res.status(400).json({message: "Unique constraint failed" , code: err.code });
        }
    }

    return res.status(status).json({
        message: err.message || "Something went wrong",
        code,
        defaults: err.details ?? undefined
    })


}