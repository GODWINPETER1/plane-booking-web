// middleware which checks the user's role before allowing certain routes
import { Request , Response , NextFunction} from "express";
import Jwt  from "jsonwebtoken";


interface AuthRequest extends Request {
    user?: { id: number ; role: string};
}

export const authenticate = (req: AuthRequest , res: Response , next: NextFunction) => {

    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({message: "Unauthorized"});

    try {
        const decoded = Jwt.verify(token , process.env.JWT_SECRET!) as {id: number; role: string};
        req.user = decoded
        next()
    } catch (err) {
        return res.status(403).json({ message: "Invalid token"})
    }
}

export const authorize = (roles: string[]) => {
    return (req: AuthRequest , res: Response , next: NextFunction) => {
        console.log(" Current User" , req.user)
        if (!req.user) return res.status(401).json({message: "Unauthorized"});
        if(!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden Insufficient role"})
        }

        next()
    }
}