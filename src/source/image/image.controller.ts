/**
 * @author Eric Silva
 * @export ImageController
 * @interface ImageController
 */

import {
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { IImage } from 'src/common/image.interface';
import { resolve } from 'path';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../../utils/images.ultils';
import { Response } from 'express';

const path = resolve(__dirname, '..', '..', '..', 'uploads');
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('')
  @UseInterceptors(
    FileInterceptor('fileImage', {
      storage: diskStorage({
        destination: resolve(path),
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadedFile(@UploadedFile() file: IImage) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };
    return response;
  }

  @Get(':imgpath')
  getImageFile(@Param('imgpath') image: any, @Res() res: Response) {
    this.imageService.getImageFile(path, image, res);
  }
}
