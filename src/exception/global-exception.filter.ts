import { Catch, HttpException } from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { ErrorKey } from '../constant/common.js';

@Catch()
export class GqlGlobalExceptionFilter implements GqlExceptionFilter {
  catch(exception: unknown) {
    if (exception instanceof HttpException) {
      const response = exception.getResponse() as any;
      const status = exception.getStatus();

      return new GraphQLError(
        typeof response === 'string' ? response : response.message,
        {
          extensions: {
            code: status,
            errorKey: response?.errorKey ?? ErrorKey.INTERNAL_SERVER_ERROR,
            timestamp: new Date().toISOString(),
          },
        },
      );
    }

    return new GraphQLError('Internal server error', {
      extensions: {
        code: 500,
        errorKey: ErrorKey.INTERNAL_SERVER_ERROR,
        timestamp: new Date().toISOString(),
      },
    });
  }
}
