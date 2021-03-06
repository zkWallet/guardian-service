import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Guardian } from '../models/guardian.model';
import { CreateGuardianDto, PublicGuardianDto } from '../dto/guardian.dto';

@Injectable()
export class GuardianService {
  constructor(
    @InjectRepository(Guardian)
    private readonly guardianRepository: MongoRepository<Guardian>,
  ) {}

  async findAll(): Promise<PublicGuardianDto[]> {
    return this.guardianRepository.find({
      select: [
        'registrationNumber',
        'displayName',
        'description',
        'city',
        'country',
        'website',
      ],
    });
  }

  async findOneBy(id: string): Promise<Guardian> {
    return this.guardianRepository.findOneBy(id);
  }

  async findOneByRegistrationNumber(
    registrationNumber: string,
  ): Promise<PublicGuardianDto> {
    const guardian = await this.guardianRepository.findOneBy({
      registrationNumber,
      select: [
        'registrationNumber',
        'displayName',
        'description',
        'city',
        'country',
        'website',
      ],
    });
    const newGuardian = new PublicGuardianDto();
    newGuardian.registrationNumber = guardian.registrationNumber;
    newGuardian.displayName = guardian.displayName;
    newGuardian.description = guardian.description;
    newGuardian.city = guardian.city;
    newGuardian.country = guardian.country;
    newGuardian.website = guardian.website;
    return newGuardian;
  }

  async findOneByWallet(wallet: string): Promise<PublicGuardianDto> {
    const guardian = await this.guardianRepository.findOneBy({
      wallet,
      select: [
        'registrationNumber',
        'displayName',
        'description',
        'city',
        'country',
        'website',
      ],
    });
    const newGuardian = new PublicGuardianDto();
    newGuardian.registrationNumber = guardian.registrationNumber;
    newGuardian.displayName = guardian.displayName;
    newGuardian.description = guardian.description;
    newGuardian.city = guardian.city;
    newGuardian.country = guardian.country;
    newGuardian.website = guardian.website;
    return newGuardian;
  }

  async findOneByEmail(email: string): Promise<PublicGuardianDto> {
    const guardian = await this.guardianRepository.findOneBy({
      email,
      select: [
        'registrationNumber',
        'displayName',
        'description',
        'city',
        'country',
        'website',
      ],
    });
    const newGuardian = new PublicGuardianDto();
    newGuardian.registrationNumber = guardian.registrationNumber;
    newGuardian.displayName = guardian.displayName;
    newGuardian.description = guardian.description;
    newGuardian.city = guardian.city;
    newGuardian.country = guardian.country;
    newGuardian.website = guardian.website;
    return newGuardian;
  }

  async create(
    createGuardianDto: CreateGuardianDto,
  ): Promise<CreateGuardianDto> {
    return this.guardianRepository.save(createGuardianDto);
  }

  // async update(
  //   id: string,
  //   updateGuardianDto: UpdateGuardianDto,
  // ): Promise<UpdateGuardianDto> {
  //   const guardian = this.findOneById(id);
  //   if (guardian) {
  //     this.guardianRepository.merge(guardian, updateGuardianDto);
  //     return this.guardianRepository.save(guardian);
  //   }
  // }
}
