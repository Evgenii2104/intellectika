import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategies/google.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'super_secret_key',
      signOptions: { expiresIn: '7d' }
    })
  ],
  providers: [AuthService, GoogleStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
