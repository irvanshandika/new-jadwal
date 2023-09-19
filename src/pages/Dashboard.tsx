import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";
import Loading from "@/components/Loading";
import { Button } from "@mui/material";
// Icons
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

interface Jadwal {
  id: number;
  hari: string;
  waktu: string;
  mataKuliah: string;
  ruangan: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();
  const fetcher = async () => {
    const response = await axios.get<Jadwal[]>("https://pemrograman.vercel.app/api/jadwal");
    return response.data;
  };
  const { data } = useSWR<Jadwal[]>("jadwal", fetcher);

  if (!data) {
    // Tambahkan delay loading di sini
    setTimeout(() => {
      mutate("jadwal");
    }, 2000); // Delay selama 2 detik

    return <Loading />;
  }

  const deleteJadwal = async (jadwalId: number) => {
    await axios.delete(`https://pemrograman.vercel.app/api/jadwal/${jadwalId}`);
    mutate("jadwal");
    navigate("/dashboard");
  };

  return (
    <>
      <section className="bg-sky-400 dark:bg-gray-900 lg:p-3 sm:p-5 h-screen">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className=" bg-sky-200 dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <a href="/pengganti">
                  <Button
                    sx={{
                      color: "white",
                      backgroundColor: "primary.light",
                      "&:hover": {
                        backgroundColor: "primary.main",
                      },
                      borderRadius: "10px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}>
                    <ArrowBackRoundedIcon
                      sx={{
                        width: "20px",
                        height: "20px",
                        marginRight: "5px",
                      }}
                    />{" "}
                    Kembali
                  </Button>
                </a>
                <a href="/tambah">
                  <Button
                    sx={{
                      color: "white",
                      backgroundColor: "success.light",
                      "&:hover": {
                        backgroundColor: "success.main",
                      },
                      borderRadius: "10px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}>
                    <AddCircleRoundedIcon
                      sx={{
                        width: "20px",
                        height: "20px",
                        marginRight: "5px",
                      }}
                    />
                    Tambah
                  </Button>
                </a>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-400">
                <thead className="text-xs uppercase bg-sky-200 text-black dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Hari
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Waktu
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Mata Kuliah
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Ruangan
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((jadwal) => (
                      <tr className="border-b border-gray-700" key={jadwal.id}>
                        <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap text-white">
                          {jadwal.hari}
                        </th>
                        <td className="px-4 py-3">{jadwal.waktu}</td>
                        <td className="px-4 py-3">{jadwal.mataKuliah}</td>
                        <td className="px-4 py-3">{jadwal.ruangan}</td>
                        <td className="px-4 py-3">
                          <a href={`/edit/${jadwal.id}`} className="mr-1">
                            <button className="bg-green-400 hover:bg-green-500 text-white text-xs w-10 h-10 font-medium rounded-full">
                              <ModeEditRoundedIcon
                                sx={{
                                  fontSize: "20px",
                                }}
                              />
                            </button>
                          </a>
                          <button onClick={() => deleteJadwal(jadwal.id)} className="bg-red-400 hover:bg-red-500 text-white text-xs w-10 h-10 font-medium rounded-full">
                            <DeleteForeverRoundedIcon />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-4 py-3 text-center text-gray-500">
                        <div className="grid justify-center mb-4">
                          <div className="inline-flex rounded-full bg-red-100 p-4">
                            <div className="rounded-full stroke-red-600 bg-red-200 p-4">
                              <svg className="w-8 h-8" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M6 8H6.01M6 16H6.01M6 12H18C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4H6C3.79086 4 2 5.79086 2 8C2 10.2091 3.79086 12 6 12ZM6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20H14"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                                <path d="M17 16L22 21M22 16L17 21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        Belum Ada Jadwal Pengganti Yang Tersedia
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
