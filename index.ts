import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

const app: Application = express();
const PORT: number = 8000;

app.use(cors())
app.use(express.json())


const configuration = new Configuration({
    apiKey: process.env.API_KEY
})

const openai = new OpenAIApi(configuration)

app.get("/sample", (req: Request, res: Response) => {
    res.send("done")
})


app.post("/completion", async(req: Request, res: Response) => {
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-4",
            messages: [{
                role: "user",
                content: `Create a SQL request to ${req.body.message}`
            }]
        })

        res.status(200).send(completion.data.choices[0].message)
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error")
        
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})