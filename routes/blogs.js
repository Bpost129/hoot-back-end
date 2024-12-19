import { Router } from "express"
import * as blogsCtrl from '../controllers/blogs.js'
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"

const router = Router()

// Unprotected Routes

// Protected Routes
router.use(decodeUserFromToken)

router.post('/', checkAuth, blogsCtrl.create)


export { router }