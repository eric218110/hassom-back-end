import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from '../../database/entitys/photo.entity';
import { REPOSITORY } from '../../constants/';
import { IService } from '../../common/service.interface';

@Injectable()
export class PhotoService implements IService<Photo> {
  constructor(
    @Inject(REPOSITORY.PHOTO)
    private photoRepository: Repository<Photo>,
  ) {}
  index(id: string): Promise<Photo> {
    throw new Error('Method not implemented.');
  }
  show(): Promise<Photo[]> {
    throw new Error('Method not implemented.');
  }
  create(createDTO: Photo): Promise<Photo> {
    throw new Error('Method not implemented.');
  }
  update(id: string, updateDTO: Photo): Promise<{}> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<{}> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }
}
