// During the test the env variable is set to test
process.env.NODE_ENV = 'test'

require('./models/advice.spec')
require('./controllers/main.controller.spec')
