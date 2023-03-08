import { Box } from "@mui/material";
import { useRef } from "react";
import { PlayerButtons } from "./PlayerButtons";
import { Spectrum } from "./Spectrum";

export function Player({ audioUrl }:{audioUrl:string}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
      <Box component='section'>
      <Spectrum audioUrl={audioUrl} />
        <PlayerButtons audioUrl={audioUrl} audioRef={audioRef} /> 
        <audio
          key={audioUrl}
          id={audioUrl}
          ref={audioRef}
        >
          <source src={audioUrl} />
        </audio>
      </Box>
  );
}
