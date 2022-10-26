import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    try {
      this.createUserUseCase.execute({ email, name });
      return response.status(201).json({ email, name });
    } catch (error) {
      return response.status(400).json({ error: "email already exist" });
    }
  }
}

export { CreateUserController };
