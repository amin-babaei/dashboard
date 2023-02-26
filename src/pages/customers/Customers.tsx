import { useRef, useState } from 'react';
import { useQuery } from "@apollo/client";
import { Box, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import GET_CHARACTERS from "../../gql/customers";
import { CharactersResponse } from "./customers-interface";
import Loading from './Loading';

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

  if(loading)return <Loading/>
  if(error)return <Typography>{error.message}</Typography>
  return (
    <TableContainer component={Paper} ref={scollToRef}>
        <Box sx={{ overflow: "auto" }}>
          <Box sx={{ width: "100%", display: 'table', tableLayout: "fixed" }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">image</TableCell>
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
                  >
                    <TableCell align="center">
                      <img src={cararcter.image} alt="" width={100} />
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
              <Pagination count={info?.pages} page={page} onChange={handleChange} />
            </Table>
          </Box>
        </Box>
    </TableContainer>
  );
};

export default Customers;