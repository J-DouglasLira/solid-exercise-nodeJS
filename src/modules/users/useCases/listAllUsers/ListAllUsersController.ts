import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id }: any = request.headers;

    try {
      const allUsers = this.listAllUsersUseCase.execute({ user_id });
      return response.status(201).json(allUsers);
    } catch (error) {
      return response.status(400).json({ error: "mensagem de error" });
    }
  }
}

export { ListAllUsersController };
