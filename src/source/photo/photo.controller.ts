import { Get, Controller } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { IController } from 'src/common/controller.interface';
import { Photo } from 'src/database/entitys/photo.entity';

@Controller('photo')
export class PhotoController implements IController<Photo> {
  constructor(private appService: PhotoService) {}
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

  @Get()
  root() {
    return this.appService.findAll();
  }
}
