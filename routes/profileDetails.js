import { Router } from 'express'
import * as profileDetailCtrl from '../controllers/profileDetails.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, profileDetailCtrl.create)
router.get('/', profileDetailCtrl.index)


/*---------- Public Routes ----------*/


export { router }
