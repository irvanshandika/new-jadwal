/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import useSWR from "swr";
import { FC, useEffect, useState } from "react";
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
    }, 1000); // Ganti 2000 dengan durasi delay yang Anda inginkan dalam milidetik (misalnya, 3000 untuk 3 detik).

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="p-3 sm:p-5 h-screen mt-4">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="mb-4">
                <a href="/dashboard" className="text-white bg-blue-600 hover:bg-blue-400 px-4 py-2 rounded-md">
                  Go To Dashboard
                </a>
              </div>
              <div className="border rounded-lg overflow-hidden border-blue-500 dark:border-gray-700">
                <table className="min-w-full divide-y divide-blue-500 dark:divide-gray-700">
                  <thead className="bg-sky-200 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                        Hari
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                        Waktu
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                        Mata Kuliah
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                        Ruangan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {data && data.length > 0 ? (
                      data.map((jadwal) => (
                        <tr key={jadwal.hari + jadwal.waktu}>
                          <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{jadwal.hari}</th>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{jadwal.waktu}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{jadwal.mataKuliah}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{jadwal.ruangan}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-gray-500 dark:text-gray-400 bg-sky-200 dark:bg-gray-800">
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
        </div>
      </section>
    </>
  );
};

export default TableJadwal;
