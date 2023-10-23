import { Box, Button, Slider, Stack } from "@mui/material";
import { useRef, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { Spectrum } from "./Spectrum";
import { VolumeDown, VolumeUp } from "@mui/icons-material";

export function Player({ audioUrl }: { audioUrl: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(20);

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      audioRef.current!.currentTime = newValue;
      setCurrentTime(newValue);
    }
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current!.currentTime);
  }

  const handleVolumeChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {
  if (typeof newValue === 'number') {
    const newVolume = newValue as number;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  }
};

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
      <Stack justifyContent="space-between" alignItems="flex-start" sx={{ mb: 1, flexDirection: { xs: 'column', md:'row' }}} ml={1} gap={2}>
        <Slider
          min={0}
          max={audioRef.current ? audioRef.current.duration : 0}
          value={currentTime}
          onChange={handleSliderChange}
          sx={{
            width: { xs:'100%', md:'80%' },
            display: 'block',
            color: '#ed6c02',
            mb: 1,
            ml: 1,
            '& .MuiSlider-thumb': {
              '&:hover': {
                boxShadow: '0px 0px 0px 4px rgba(254, 186, 67, 0.5)'
              },
            },
          }}
        />
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center" width={{xs:'100%',md:'20%'}} mt={0}>
          <VolumeDown />
          <Slider
            min={0}
            max={100}
            value={volume}
            onChange={(event: any, newValue: number | number[]) => handleVolumeChange(event, newValue)}
            sx={{
              width: '100%',
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
          <VolumeUp />
        </Stack>
      </Stack>
    </Box>
  );
}
