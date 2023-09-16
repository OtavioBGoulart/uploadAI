import cors from "cors";
import express from "express";
import { download } from "./download.js";
import { transcribe } from "./transcribe.js";
import { summarize } from "./summarize.js";
import { convert } from "./convert.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/summary/:id", async (req, res) => {
  try {
    console.log("oi");
    await download(req.params.id);
    console.log("passou");
    const audioConverted = await convert();
    console.log(audioConverted);
    const result = await transcribe(audioConverted);
    //console.log(result);
    res.json({ result });
  } catch (error) {
    return res.json({ error });
  }
});

app.post("/summary", async (req, res) => {
  try {
    const result = await summarize(req.body.text);
    return res.json({ result });
  } catch (error) {
    return res.json({ error });
  }
});

app.listen(4000, () => console.log("Server is running on port 4000"));
