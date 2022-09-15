import {
  TableContainer, //table i contenierna,
  Table, //table-n a
  TableHead, //headerna, vortex vor dannineri tesaknern en voch te danninery, (aysinqn graca id , name, itd)
  TableBody, //body votex vor grvum en henc danninery(aysinq 1, atom, itd)
  TableRow, //sharqna mejy exnum, (id, name, itd)
  TableCell, //gtnvuma rowi mej, amen meki mej grvuma mi ban orinak (id ,name itd)
  Paper, //prosty vor tablecontainery paper sarqenq
} from "@mui/material";
import React from "react";

export const MuiTable = () => {
  return (
    <TableContainer
     component={Paper} //paper compnentna darnum, 
      sx={{ maxHeight: "268px" }}
      >
      <Table 
      aria-label="simple table"
       stickyHeader //nra hamara vor scrol arajana scroli het headery chijni
      >
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell 
            align="center" //vor centrum exni ira taracqi
            >Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }} //chjogi esincha arel inch vor shadownera tali verjinin yani
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [ // mockaroo - ic em vercrel dannineri lav texa
  {
    id: 1,
    first_name: "Doug",
    last_name: "Rosenfield",
    email: "drosenfield0@go.com",
    gender: "Male",
    ip_address: "41.9.204.51",
  },
  {
    id: 2,
    first_name: "Louisa",
    last_name: "Eliassen",
    email: "leliassen1@sciencedirect.com",
    gender: "Female",
    ip_address: "50.53.179.125",
  },
  {
    id: 3,
    first_name: "Fitzgerald",
    last_name: "Chipp",
    email: "fchipp2@networkadvertising.org",
    gender: "Male",
    ip_address: "21.143.208.88",
  },
  {
    id: 4,
    first_name: "Stephenie",
    last_name: "Genney",
    email: "sgenney3@google.com",
    gender: "Female",
    ip_address: "155.224.38.240",
  },
  {
    id: 5,
    first_name: "Jenni",
    last_name: "Halbard",
    email: "jhalbard4@seattletimes.com",
    gender: "Female",
    ip_address: "60.56.102.30",
  },
  {
    id: 6,
    first_name: "Kingsley",
    last_name: "McConaghy",
    email: "kmcconaghy5@hc360.com",
    gender: "Male",
    ip_address: "176.155.178.106",
  },
  {
    id: 7,
    first_name: "Jeremias",
    last_name: "Benstead",
    email: "jbenstead6@blogger.com",
    gender: "Male",
    ip_address: "4.162.195.157",
  },
  {
    id: 8,
    first_name: "Jessie",
    last_name: "Freegard",
    email: "jfreegard7@dot.gov",
    gender: "Female",
    ip_address: "75.105.33.216",
  },
  {
    id: 9,
    first_name: "Cam",
    last_name: "Bigrigg",
    email: "cbigrigg8@gravatar.com",
    gender: "Male",
    ip_address: "42.186.201.41",
  },
  {
    id: 10,
    first_name: "Gabriello",
    last_name: "Neary",
    email: "gneary9@mediafire.com",
    gender: "Male",
    ip_address: "17.200.69.16",
  },
];
