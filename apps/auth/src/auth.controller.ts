import { Controller, Post, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CurrentUser } from './users/current-user.decorator';
import { UserDocument } from './users/models/users.schema';
import { Response } from 'express';

@Controller('auth')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @CurrentUser() user: UserDocument,
    @Res({ passthrough: true }) response: Response,
  ) {
    console.log('user -> ', user);
    await this.authService.login(user, response);
    response.send(user);
  }
}
