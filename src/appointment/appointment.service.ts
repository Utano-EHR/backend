import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AppointmentService {
  constructor(private db: DatabaseService) {}
  async create(dto: CreateAppointmentDto) {
    dto.date = new Date(dto.date);
    const appointment = await this.db.appointment.create({
      data: { ...dto },
      include: {
        doctor: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            hospital_id: true,
            speciality: true,
          },
        },
        patient: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            date_of_birth: true,
            national_id: true,
            mother_national_id: true,
            father_national_id: true,
            insurance_id: true,
            allergies: true,
            blood_group: true,
          },
        },
      },
    });
    return {
      success: true,
      message: 'appointment created successfully!',
      data: { appointment },
    };
  }

  async findAll(doctor_id: number | undefined) {
    let appointments;
    if (doctor_id) {
      appointments = await this.db.appointment.findMany({
        where: {
          doctor_id,
        },
        include: {
          doctor: {
            select: {
              id: true,
              firstname: true,
              lastname: true,
              email: true,
              hospital_id: true,
              speciality: true,
            },
          },
          patient: {
            select: {
              id: true,
              firstname: true,
              lastname: true,
              email: true,
              date_of_birth: true,
              national_id: true,
              mother_national_id: true,
              father_national_id: true,
              insurance_id: true,
              allergies: true,
              blood_group: true,
            },
          },
        },
      });
    } else {
      appointments = await this.db.appointment.findMany({});
    }
    return {
      success: true,
      message: 'all appointments found!',
      data: {
        appointments,
      },
    };
  }

  async findOne(id: number) {
    const appointment = await this.db.appointment.findFirst({
      where: {
        id,
      },
      include: {
        doctor: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            hospital_id: true,
            speciality: true,
          },
        },
        patient: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            date_of_birth: true,
            national_id: true,
            mother_national_id: true,
            father_national_id: true,
            insurance_id: true,
            allergies: true,
            blood_group: true,
          },
        },
      },
    });
    return {
      success: true,
      message: 'appointment found!',
      data: {
        appointment,
      },
    };
  }

  async update(id: number, dto: UpdateAppointmentDto) {
    dto.date ? (dto.date = new Date(dto.date)) : undefined;
    const appointment = await this.db.appointment.update({
      where: {
        id,
      },
      data: { ...dto },
      include: {
        doctor: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            hospital_id: true,
            speciality: true,
          },
        },
        patient: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            date_of_birth: true,
            national_id: true,
            mother_national_id: true,
            father_national_id: true,
            insurance_id: true,
            allergies: true,
            blood_group: true,
          },
        },
      },
    });
    return {
      success: true,
      message: 'appointment updated!',
      data: {
        appointment,
      },
    };
  }

  async remove(id: number) {
    const appointment = await this.db.appointment.delete({
      where: {
        id,
      },
    });
    return {
      success: true,
      message: 'appointment deleted!',
      data: {
        appointment,
      },
    };
  }
}
