import { Controller, Get } from "@nestjs/common";
import { TestService } from "./test.service";

@Controller("test")
export class TestController {
  constructor(private readonly testServie: TestService) {}

  @Get("/test1")
  test(): string {
    return this.testServie.getTest();
  }
}
