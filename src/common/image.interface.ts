import { MIMETYPES } from 'src/constants';

export interface IImage {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: MIMETYPES;
  buffer: any;
  size: number;
  destination: string;
  filename: string;
  path: string;
}
