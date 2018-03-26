import * as Router from 'koa-router';

const router = new Router();

/**
 * Base route, return a 401
 */
router.get('/', async ctx => ctx.status = 401);

/**
 * Basic healthcheck
 */
router.get('/healthcheck', async ctx => ctx.body = 'OK');

export const routes = router.routes();
