import { Box, Button, Slider } from "@mui/material";
import { useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { Spectrum } from "./Spectrum";

export function Player({ audioUrl }: { audioUrl: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      audioRef.current!.currentTime = newValue;
      setCurrentTime(newValue);
    }
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current!.currentTime);
  }

  const handleEnded = () => {
    setIsPaused(true);
    setIsStopped(true);
    setCurrentTime(0);
  }

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
      <audio key={audioUrl} id={audioUrl} ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded}>
        <source src={audioUrl} />
      </audio>
      <Slider
        min={0}
        max={audioRef.current ? audioRef.current.duration : 0}
        value={currentTime}
        onChange={handleSliderChange}
        sx={{
          width: '85%',
          margin: 'auto',
          display: 'block',
          color: '#ed6c02',
          mb: 1,
          '& .MuiSlider-thumb': {
            '&:hover': {
              boxShadow: '0px 0px 0px 4px rgba(254, 186, 67, 0.5)'
            },
          },
        }}
      />
    </Box>
  );
}
