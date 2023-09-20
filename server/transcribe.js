// import { pipeline } from "@xenova/transformers";

// import { transcriptionExample } from "./utils/transcription.js";

// export async function transcribe(audio) {
//   try {
//     // return transcriptionExample

//     console.log("Realizando a transicrição...");

//     const transcribe = await pipeline(
//       "automatic-speech-recognition",
//       "Xenova/whisper-small"
//     );

//     const transcription = await transcribe(audio, {
//       chunk_length_s: 30,
//       stride_length_s: 5,
//       language: "portuguese",
//       task: "transcribe",
//     });

//     console.log("Transcrição finalizada com sucesso.");
//     return transcription?.text.replace("[Música]", "");
//   } catch (error) {
//     throw new Error(error);
//   }
// }

import { transcriptionExample } from "./utils/transcription.js";
import { pipeline } from "@xenova/transformers";
//import { env } from "@xenova/transformers";

// Specify a custom location for models (defaults to '/models/').
//env.localModelPath = "/home/otavio/NWL/FoundationIA/uploadIA/whisper";
// import { Pipeline } from "@xenova/transformers";

export async function transcribe(audio) {
  //return transcriptionExample;

  try {
    console.log("Realizando a transcrição...");
    const transcribe = await pipeline(
      "automatic-speech-recognition",
      "Xenova/whisper-small"
    );

    console.log("aaaaaaaaaaaaa");

    const transcription = await transcribe(audio, {
      chunk_length_s: 30,
      stride_length_s: 5,
      language: "portuguese",
      task: "transcribe",
    });

    console.log("Transcrição finalizada com sucesso.");
    return transcription?.text.replace("[Música]", "");
  } catch (error) {
    //console.log("aaaaaaaaaaaaa");
    throw new Error(error);
  }
}
