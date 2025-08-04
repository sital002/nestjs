import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { TestService } from "./test.service";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("test")
export class TestController {
  constructor(private readonly testServie: TestService) {}

  @UseGuards(AuthGuard)
  @Get("/test1")
  test(@Request() req): string {
    console.log(req["admin"]);
    return this.testServie.getTest();
  }
}
