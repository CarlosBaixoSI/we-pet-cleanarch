import { makeApp } from "./app";
import { makeContainer } from "../crosscutting/container";

const dependencies = makeContainer();
const PORT = process.env.PORT || 3000;

makeApp(dependencies).listen(PORT, function applicationStarted() {
    dependencies.logger.info({detail: `Application started listening on port: ${PORT}`})
})
