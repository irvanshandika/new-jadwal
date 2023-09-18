import React, { useState, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
// Icons
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const TambahJadwal: React.FC = () => {
  const [hari, setHari] = useState<string>("");
  const [waktu, setWaktu] = useState<string>("");
  const [mataKuliah, setMataKuliah] = useState<string>("");
  const [ruangan, setRuangan] = useState<string>("");
  const navigate = useNavigate();

  const saveJadwal = async (e: FormEvent) => {
    e.preventDefault();
    await axios.post("https://pemrograman.vercel.app/api/jadwal", {
      hari,
      waktu,
      mataKuliah,
      ruangan,
    });
    navigate("/dashboard");
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-sky-200 p-8 rounded-xl shadow shadow-slate-300 dark:bg-gray-800 dark:shadow-slate-800">
      <form className="my-10" onSubmit={saveJadwal}>
        <div className="flex flex-col">
          <div className="mb-5">
            {/* <label className="font-bold text-slate-700">Hari</label> */}
            {/* <Typography className="font-bold text-slate-700 dark:text-slate-100">Hari</Typography> */}
            <input type="text" value={hari} onChange={(e) => setHari(e.target.value)} className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Hari" />
          </div>
          <div className="mb-5">
            {/* <label className="font-bold text-slate-700">Waktu</label> */}
            <Typography className="font-bold text-slate-700 dark:text-slate-100">Waktu</Typography>

            <input type="text" value={waktu} onChange={(e) => setWaktu(e.target.value)} className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Waktu" />
          </div>
          <div className="mb-5">
            {/* <label className="font-bold text-slate-700 dark:text-slate-100">Mata Kuliah</label> */}
            <Typography className="font-bold text-slate-700 dark:text-slate-100">Mata Kuliah</Typography>
            <input
              type="text"
              value={mataKuliah}
              onChange={(e) => setMataKuliah(e.target.value)}
              className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus-border-slate-500 hover:shadow"
              placeholder="Mata Kuliah"
            />
          </div>
          <div className="mb-5">
            {/* <label className="font-bold text-slate-700">Ruangan</label> */}
            <Typography className="font-bold text-slate-700 dark:text-slate-100">Ruangan</Typography>
            <input type="text" value={ruangan} onChange={(e) => setRuangan(e.target.value)} className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Ruangan" />
          </div>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
            }}>
            <Button
              type="submit"
              sx={{
                backgroundColor: "primary.light",
                color: "white",
                "&:hover": {
                  backgroundColor: "primary.dark",
                  color: "white",
                },
                width: "100px",
                height: "40px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                marginRight: "10px",
              }}>
              <SaveAsRoundedIcon
                sx={{
                  width: "20px",
                  height: "20px",
                  marginRight: "5px",
                }}
              />
              Simpan
            </Button>
            <a href="/dashboard">
              <Button
                type="button"
                sx={{
                  backgroundColor: "warning.light",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "warning.dark",
                    color: "white",
                  },
                  width: "100px",
                  height: "40px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}>
                <ArrowBackRoundedIcon
                  sx={{
                    width: "20px",
                    height: "20px",
                    marginRight: "5px",
                  }}
                />
                Kembali
              </Button>
            </a>
          </Grid>
        </div>
      </form>
    </div>
  );
};

export default TambahJadwal;
