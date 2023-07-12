import express, { Express} from 'express'
import expressListEndpoints from 'express-list-endpoints'
import api from './interfaceAdapter/route/api'
import web from './interfaceAdapter/route/web'

const app: Express = express()
const port: String = process.env.PORT || 3000..toString()


app.use('/api', api)
app.use('/web', web)

app.listen(port, () => {
  console.log('⚡️ Server is running on port ${port}')
  console.log(expressListEndpoints(app))
})
app.listen()