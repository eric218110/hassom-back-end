import { Injectable, Inject } from '@nestjs/common';
import { ImagesEntity } from 'src/database/entitys/images.entity';
import { REPOSITORY } from 'src/constants';
import { Repository } from 'typeorm';
import { Response } from 'express';
import { resolve } from 'path';
import { Exception } from 'src/provider/error';
import { exists } from 'fs';
import { IImage } from 'src/common/image.interface';
import { ProductEntity } from 'src/database/entitys/product.entity';

@Injectable()
export class ImageService {
  constructor(
    @Inject(REPOSITORY.IMAGE)
    private imageRepository: Repository<ImagesEntity>,
    @Inject(REPOSITORY.PRODUCT)
    private productRepository: Repository<ProductEntity>,
  ) {}

  index(path: string, image: any, res: Response) {
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

  async create(image: IImage, id: string) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });

      const newImage = new ImagesEntity();

      newImage.product = product;
      newImage.destination = image.destination;
      newImage.encoding = image.encoding;
      newImage.fieldname = image.fieldname;
      newImage.filename = image.filename;
      newImage.mimetype = image.mimetype;
      newImage.originalname = image.originalname;
      newImage.path = image.path;
      newImage.size = image.size;

      return await this.imageRepository.save(newImage);
    } catch (error) {
      throw new Exception().create('Not create', error);
    }
  }
}
