import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import * as mm from "music-metadata-browser";
import { Player } from "@/components/audio/Player";
import { Paper, Typography } from "@mui/material";

type IFileMetaData = {
    album:string
    artist:string
    title:string
    year : number
};

const DropAudio = () => {
  const [fileLoaded, setFileLoaded] = useState<boolean>(false);
  const [fileURL, setFileURL] = useState<string>("");
  const [fileMetaData, setFileMetaData] = useState<IFileMetaData|null>(null);

  const onDrop = useCallback((acceptedFiles: Blob[]) => {
    acceptedFiles.forEach((file: Blob) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {

        const objectURL = URL.createObjectURL(file);

        setFileLoaded(true);
        setFileURL(objectURL);
        (async () => {
          try {
            const {common} = await mm.fetchFromUrl(objectURL);
            setFileMetaData(common as IFileMetaData);
          } catch(err) {
            console.log(err);
          }
        })();
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'audio/mp3': ['.mp3', '.MP3'],
    }
  });

  return fileLoaded && fileURL && fileMetaData ? (
    <>
      <Player audioUrl={fileURL}/>
      <Paper sx={{ padding: 3 }} {...getRootProps()}>
        <input {...getInputProps()} />
        <span>
          artist: <span className="DropzoneFileName">{fileMetaData.artist}</span>
        </span>
        {""}
        <p>یک فایل صوتی را اینجا رها کنید یا برای آپلود کلیک کنید</p>
      </Paper>
    </>
  ) : (
    <Paper sx={{ padding: 3 }} {...getRootProps()}>
      <input {...getInputProps()} />
      <Typography component='h4'>یک فایل صوتی را اینجا رها کنید یا برای آپلود کلیک کنید</Typography>
    </Paper>
  );
}
export default DropAudio