import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from '../../database/entitys/photo.entity';
import { REPOSITORY } from '../../constants/';

@Injectable()
export class PhotoService {
  constructor(
    @Inject(REPOSITORY.PHOTO)
    private photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }
}
