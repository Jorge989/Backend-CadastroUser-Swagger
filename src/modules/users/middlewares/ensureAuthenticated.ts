import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";
interface ITokenPayLoad {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const bearerToken = request.headers.authorization;

  const [, token] = bearerToken.split(" ");
  try {
    const { sub } = verify(
      token,
      process.env.REACT_APP_API_KEY
    ) as ITokenPayLoad;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    return response.status(401).json({ erro: "token jwt inválido" });
  }
}
