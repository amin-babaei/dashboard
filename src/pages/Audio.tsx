import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import * as mm from "music-metadata-browser";
import { Player } from "@/components/audio/Player";
import { Paper, Typography } from "@mui/material";

const DropAudio = () => {
  const [fileLoaded, setFileLoaded] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");
  const [fileURL, setFileURL] = useState<string>("");

  const [fileMetaData, setFileMetaData] = useState({});

  const onDrop = useCallback((acceptedFiles: Blob[]) => {
    acceptedFiles.forEach((file: Blob) => {
      const reader = new FileReader();
      const fileName = file.name;

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {

        const objectURL = URL.createObjectURL(file);

        setFileLoaded(true);
        setFileName(fileName);
        setFileURL(objectURL);
        (async () => {
          try {
            const metaData = await mm.fetchFromUrl(objectURL);
            setFileMetaData([metaData]);
          } catch {
            throw new Error('فایل شناسایی نشد');
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

  return fileLoaded && fileURL && fileMetaData[0] ? (
    <>
      <Player audioUrl={fileURL}/>
      <Paper sx={{ padding: 3 }} {...getRootProps()}>
        <input {...getInputProps()} />
        <span>
          Filename: <span className="DropzoneFileName">{fileName}</span>
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