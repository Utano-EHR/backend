import { ForbiddenException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as argon from 'argon2';
import { DatabaseService } from 'src/database/database.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly db: DatabaseService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async create(dto: CreateUserDto) {
    const hospital_id = dto.hospital_id;
    const speciality_id = dto.speciality_id;

    // IF ROLE IS DOCTOR AND NO HOSPITAL ID OR SPECIALITY ID
    // RETURN ERROR;
    if (dto.role_id === 1 && !(hospital_id && speciality_id)) {
      return {
        success: false,
        message: 'Hospital and speciality are required for doctors',
      };
    }

    // IF ROLE IS NOT DOCTOR AND SPECIALITY ID IS SPECIFIED, RETURN ERROR
    if (dto.role_id !== 1 && speciality_id) {
      return {
        success: false,
        message: 'Only doctors can have specialities',
      };
    }

    dto.email = dto.email.toLowerCase();
    dto.password = await argon.hash(dto.password);
    dto.hospital_id = hospital_id ?? undefined;
    dto.speciality_id = speciality_id ?? undefined;

    const user = await this.db.user.create({
      // @ts-ignore
      data: {
        ...dto,
      },
      include: {
        hospital: true,
        speciality: true,
        nationality: true,
        consultations: true,
        appointments: true,
        prescriptions: true,
      },
    });

    // SIGN JWT TOKEN
    const access_token = await this.signToken(user.id, user.email);
    delete user.password;

    return {
      success: true,
      message: 'Doctor registered successfully',
      data: { user, access_token },
    };
  }

  /**
   * Sign JWT Token
   */
  private async signToken(
    user_id: number,
    email: string,
  ): Promise<string> {
    const payload = {
      sub: user_id,
      email,
    };
    const token = await this.jwt.signAsync(payload);
    return token;
  }

  /**
   * Login User
   */
  async login(dto: LoginDto) {
    const user = await this.db.user.findFirst({
      where: {
        email: dto.email.toLowerCase(),
      },
      include: {
        hospital: true,
        speciality: true,
        nationality: true,
        consultations: true,
        appointments: true,
        prescriptions: true,
      },
    });
    if (!user) throw new ForbiddenException('Credentials incorrect');

    const pwMatches = await argon.verify(user.password, dto.password);
    if (!pwMatches) {
      throw new ForbiddenException('Credentials incorrect');
    }

    delete user.password;
    const access_token = await this.signToken(user.id, user.email);

    return {
      success: true,
      message: 'login successful',
      data: { user, access_token },
    };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
