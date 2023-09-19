/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Loading from "@components/Loading";

interface Jadwal {
  hari: string;
  waktu: string;
  mataKuliah: string;
  ruangan: string;
}

const TableJadwal: FC = () => {
  const fetcher = async () => {
    const response = await axios.get<Jadwal[]>("https://pemrograman.vercel.app/api/jadwal");
    return response.data;
  };

  const { data } = useSWR<Jadwal[]>("jadwal", fetcher);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const darkTheme = createTheme({
    palette: {
      mode: "dark", // Mengaktifkan dark mode
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Ini akan mengatur gaya dasar sesuai dengan tema */}
      <section className="p-3 sm:p-5 h-screen mt-4">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="mb-4">
                <Button href="/dashboard" variant="contained" color="primary">
                  Go To Dashboard
                </Button>
              </div>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Hari</TableCell>
                      <TableCell>Waktu</TableCell>
                      <TableCell>Mata Kuliah</TableCell>
                      <TableCell>Ruangan</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data && data.length > 0 ? (
                      data.map((jadwal) => (
                        <TableRow key={jadwal.hari + jadwal.waktu}>
                          <TableCell>{jadwal.hari}</TableCell>
                          <TableCell>{jadwal.waktu}</TableCell>
                          <TableCell>{jadwal.mataKuliah}</TableCell>
                          <TableCell>{jadwal.ruangan}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} align="center">
                          Belum Ada Jadwal Pengganti Yang Tersedia
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default TableJadwal;
