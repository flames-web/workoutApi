const express = require('express');
const bodyParser = require('body-parser');
const apicache = require('apicache');
const v1Router = require('./v1/routes');
const v1WorkoutRouter = require('./v1/routes/workout');
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const cache = apicache.middleware;
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cache('2 minutes'))
app.use('/api/v1',v1Router);
app.use('/api/v1/workouts',v1WorkoutRouter);

app.listen(PORT,() => {
    console.log(`API is listening on ${PORT}`);
    V1SwaggerDocs(app, PORT);
})