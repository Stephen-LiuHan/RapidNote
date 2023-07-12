import {Router} from "express";
import noImpl from '../../noImpl'

const router : Router = Router({ mergeParams: true });

router.get('/v1', noImpl)

export default router
