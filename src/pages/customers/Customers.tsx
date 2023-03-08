import { useRef, useState } from 'react';
import { useQuery } from "@apollo/client";
import { Box, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import GET_CHARACTERS from "../../gql/customers";
import { CharactersResponse } from "./customers-interface";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from './Loading';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Customers = () => {
  const [page, setPage] = useState(1);
  const scollToRef = useRef<HTMLDivElement>(null);
  const { data, loading, error } = useQuery<CharactersResponse>(GET_CHARACTERS, {
    variables: { page: +page || 1 },
  });
  const info = data?.characters.info
  const item = data?.characters.results

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    scollToRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  if (loading) return <Loading />
  if (error) return <Typography>{error.message}</Typography>
  return (
    <TableContainer component={Paper} ref={scollToRef}>
      <Box component='div' sx={{ overflow: "auto" }}>
        <Box component='div' sx={{ width: "100%", display: 'table', tableLayout: "fixed" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">image</TableCell>
                <TableCell align="center">name</TableCell>
                <TableCell align="center">gender</TableCell>
                <TableCell align="center">status</TableCell>
                <TableCell align="center">id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {item?.map(cararcter => (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  key={cararcter.id}
                >
                  <TableCell align="left">
                    <LazyLoadImage src={cararcter.image} width={100} alt={cararcter.name} effect='blur'/>
                  </TableCell>
                  <TableCell align="center">
                    {cararcter.name}
                  </TableCell>
                  <TableCell align="center">{cararcter.gender}</TableCell>
                  <TableCell align="center">{cararcter.status}</TableCell>
                  <TableCell align="center">{cararcter.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination sx={{ width: '500px' }} count={info?.pages} page={page} onChange={handleChange} />
        </Box>
      </Box>
    </TableContainer>
  );
};

export default Customers;