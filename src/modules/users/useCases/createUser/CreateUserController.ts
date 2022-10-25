import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    try {
      this.createUserUseCase.execute({ email, name });
    } catch (error) {
      return response.status(400).json({ error: "mensagem de error" });
    }
    return response.status(201).json({ email, name });
  }
}

export { CreateUserController };
