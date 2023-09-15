import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoId
  console.log(videoId)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
    .on("info", (info) => {
      const segundos = info.formats[0].approxDurationMs / 1000

      if (segundos > 60) {
        throw new Error("A duração desse vídeo é maior que 60 segundos")
        //console.log("oi")
      }
    })
    .on("end", () => {
      console.log("Dowload do vídeo finalizado")
    })
    .on("error", (error) => {
      console.log("Não foi possível fazer o download do texto", error)
    })
    .pipe(fs.createWriteStream("./tmp/audio.mp4"))
}
