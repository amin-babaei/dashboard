import { Box, Button } from "@mui/material";
import { useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { Spectrum } from "./Spectrum";

export function Player({ audioUrl }: { audioUrl: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  return (
    <Box component='section'>
      <Spectrum audioUrl={audioUrl} />
      <Box component='div' display='flex' justifyContent='center'>
        {isPaused || isStopped ? (
          <Button
            sx={{ my: 2 }}
            color="warning"
            variant="contained"
            onClick={() => {
              audioRef.current?.play();
              setIsPaused(false);
              setIsStopped(false);
            }}
          >
            <PlayArrowIcon />
          </Button>
        ) : (
          <Button
            sx={{ my: 2 }}
            color="warning"
            variant="contained"
            onClick={() => {
              audioRef.current?.pause();
              setIsPaused(true);
              setIsStopped(false);
            }}
          >
            <PauseIcon />
          </Button>
        )}
      </Box>
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
