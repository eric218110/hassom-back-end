/**
 * @author Eric Silva
 * @export Exception
 * @class Exception
 */

import { HttpException } from '@nestjs/common';
import { COD_EXCEPTION } from '../../constants';
import { Env } from '../env.provider';

export class Exception {
  public create(message: string, error?: any) {
    if (!Env.isDev()) {
      error = 'it was not possible to create';
    }
    return new HttpException({ message, error }, COD_EXCEPTION.CREATE);
  }
  public index(message: string) {
    return new HttpException(
      `Not find equals = ${message}`,
      COD_EXCEPTION.SHOW,
    );
  }
  public show(message: string) {
    return new HttpException(message, COD_EXCEPTION.INDEX);
  }
  public update(message: string) {
    return new HttpException(message, COD_EXCEPTION.UPDATE);
  }
  public delete(message: string) {
    return new HttpException(message, COD_EXCEPTION.DELETE);
  }
}
