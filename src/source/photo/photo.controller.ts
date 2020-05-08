import { Get, Controller } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private appService: PhotoService) {}

  @Get()
  root() {
    return this.appService.findAll();
  }
}
