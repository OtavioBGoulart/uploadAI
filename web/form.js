import { server } from "./server";
const form = document.querySelector("#form");
const input = document.querySelector("#url");
const content = document.querySelector("#content");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  content.classList.add("placeholder");
  const videoURL = input.value;
  console.log("URL", videoURL);

  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Esse vídeo não parece ser um short");
  }

  const [, params] = videoURL.split("/shorts/");
  const [videoId] = params.split("?si");
  console.log(videoId);

  content.textContent = "Obtendo o texto do áudio";
  const transcription = await server.get("/summary/" + videoId);
  console.log(transcription);

  //content.textContent = transcription.data.result;
  content.textContent = "Realizando o resumo...";

  // const summary = await server.post("/summary", {
  //   text: transcription.data.result,
  // });

  content.textContent = transcription.data.result;
  content.classList.remove("placeholder");
});
