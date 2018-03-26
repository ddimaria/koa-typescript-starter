import * as Koa from 'koa';

export interface ILog {
  method: string;
  url: string;
  query: string;
  data?: any;
  remoteAddress: string;
  host: string;
  userAgent: string;
  statusCode: number;
}

/**
 * Log to stdout
 *
 * @param {Koa.Context} ctx
 * @param {callback} next
 * @todo make stdout an option for testing and production-level logging
 */
export async function logger(ctx: Koa.Context, next: () => Promise<any>) {
  const data: Partial<ILog> = {
    method: ctx.method,
    url: ctx.url,
    query: ctx.query,
    data: ctx.request.body,
    remoteAddress: ctx.request.ip,
    host: ctx.headers['host'],
    userAgent: ctx.headers['user-agent'],
    statusCode: ctx.status
  };

  try {
    await next();
    data.statusCode = ctx.status;
  } catch (e) {
    data.statusCode = e.status;
  }

  process.stdout.write(JSON.stringify(data) + '\n');
}
