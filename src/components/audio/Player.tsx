import { Box } from "@mui/material";
import { useRef } from "react";
import { PlayerButtons } from "./PlayerButtons";
import { Spectrum } from "./Spectrum";

export function Player({ audioUrl,status }:{audioUrl:string,status:string}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
      <Box component='section' sx={{display:status ? 'none' : 'true'}}>
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
