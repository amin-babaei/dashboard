import { useState, useEffect, MutableRefObject } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { Box, Button } from "@mui/material";

export function PlayerButtons({ audioUrl, audioRef }: { audioUrl: string, audioRef: MutableRefObject<HTMLAudioElement> }) {
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(true);

  useEffect(() => {
    setIsStopped(true);
  }, [audioUrl]);

  return (
    <Box component='div' display='flex' justifyContent='center'>
      {isPaused || isStopped ? (
        <Button
          sx={{ my: 2 }}
          color="warning"
          variant="contained"
          onClick={() => {
            audioRef.current.play();
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
            audioRef.current.pause();
            setIsPaused(true);
            setIsStopped(false);
          }}
        >
          <PauseIcon />
        </Button>
      )}
    </Box>
  );
}
