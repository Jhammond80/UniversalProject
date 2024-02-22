import {Router} from 'express'
import { 
    createOne,
    getAll,
    deleteOne,
    getOne,
    updateOne
} from '../controllers/Project.contollers.js'


const router =  Router()

router.route('/project')
.post(createOne)
.get(getAll)

router.route('/project/:id')
.get(getOne)
.put(updateOne)
.delete(deleteOne)


export default router