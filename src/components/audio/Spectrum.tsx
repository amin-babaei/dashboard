import AudioSpectrum from "react-audio-spectrum";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

export function Spectrum({ audioUrl }:{audioUrl:string}) {
  const [id, setId] = useState("");
  useEffect(() => {
    setId(audioUrl + "_Spectrum");
  }, [audioUrl]);
  return (
    <Box component='div' display='flex' justifyContent='center'>
      <AudioSpectrum
        id="audio-canvas"
        key={id}
        audioId={audioUrl}
        capColor={"red"}
        objectFit= 'contain'
        capHeight={2}
        meterWidth={2}
        meterCount={512}
        meterColor={[
          { stop: 0, color: "yellow" },
          { stop: 0.5, color: "orangered" },
          { stop: 1, color: "rgb(194, 248, 50)" }
        ]}
        gap={4}
      />
    </Box>
  );
}
