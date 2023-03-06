import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import * as mm from "music-metadata-browser";
import { Player } from "@/components/audio/Player";
import { Paper, Typography } from "@mui/material";

const DropAudio = () => {
  const [fileLoaded, setFileLoaded] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>("");
  const [fileURL, setFileURL] = useState<string>("");
  const [status, setStatus] = useState<string>("");

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
        setStatus('');
        (async () => {
          try {
            const metaData = await mm.fetchFromUrl(objectURL);
            setFileMetaData([metaData]);
          } catch (error) {
            setStatus('این فایل پشتیبانی نیمشه')
          }
        })();
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "audio/*"
  });

  return fileLoaded && fileURL && fileMetaData[0] ? (
    <>
      <Player audioUrl={fileURL} status={status} />
      <Paper sx={{ padding: 3 }} {...getRootProps()}>
        <input {...getInputProps()} />
        <span>
          Filename: <span className="DropzoneFileName">{fileName}</span>
        </span>
        <Typography component='h4' mt={1}>{status}</Typography>
        {""}
        <p>یک فایل صوتی را اینجا رها کنید یا برای آپلود کلیک کنید</p>
      </Paper>
    </>
  ) : (
    <Paper sx={{ padding: 3 }} {...getRootProps()}>
      <input {...getInputProps()} />
      <Typography component='h4'>یک فایل صوتی را اینجا رها کنید یا برای آپلود کلیک کنید</Typography>
      <Typography component='h4' mt={1}>{status}</Typography>
    </Paper>
  );
}
export default DropAudio