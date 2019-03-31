const Router = require('koa-router')
const UserService = require('./service')

const router = new Router()

/**
 * get current user
 */
router.get('/', async ctx => {
  // const token = ctx.cookies.get('token')
  const [err, result] = await ato(UserService.getCurrentUser())
  Res(err, ctx, () => {
    ctx.body = {
      data: result
    }
  })
})

/**
 * 通过userId获取用户信息
 */
router.get('/:userId', async ctx => {
  const { userId } = ctx.params
  const [err, result] = await ato(UserService.getUserById(userId))
  Res(err, ctx, () => {
    ctx.body = {
      data: result
    }
  })
})

/**
 * add user
 */
router.post('/', async ctx => {
  // ctx.request
  const user = ctx.request.body
  const [err, result] = await ato(UserService.addUser(user))
  Res(err, ctx, () => {
    ctx.body = {
      data: result
    }
  })
})

/**
 * update user
 */
router.put('/', ctx => {
  ctx.body = { status: 200 }
})

module.exports = router
