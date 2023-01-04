

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-vnNNrhgUOhz0ZS1jEssdgguN",
    apiKey: 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,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();