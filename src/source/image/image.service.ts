import { Injectable, Inject } from '@nestjs/common';
import { ImagesEntity } from 'src/database/entitys/images.entity';
import { REPOSITORY } from 'src/constants';
import { Repository } from 'typeorm';
import { Response } from 'express';
import { resolve } from 'path';
import { Exception } from 'src/provider/error';
import { exists } from 'fs';

@Injectable()
export class ImageService {
  constructor(
    @Inject(REPOSITORY.IMAGE)
    private imageRepository: Repository<ImagesEntity>,
  ) {}

  getImageFile(path: string, image: any, res: Response) {
    try {
      exists(resolve(path, image), exist => {
        if (exist) {
          return res.sendFile(image, {
            root: resolve(__dirname, '..', '..', '..', 'uploads'),
          });
        } else {
          res.status(501).json({
            error: 'File not exist',
          });
        }
      });
    } catch (error) {
      throw new Exception().index(image);
    }
  }
}
