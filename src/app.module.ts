import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TestService } from "./test-page/test.service";
import { TestPageModule } from "./test-page/test-page.module";

@Module({
  imports: [TestPageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
