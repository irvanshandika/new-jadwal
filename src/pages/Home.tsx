/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, useEffect } from "react";
import Loading from "@/components/Loading";

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const Jadwal = [
    {
      "IdHari": 1,
      "IdJam": 3,
      "IdKuliah": 66395,
      "Hari": "SENIN",
      "Ruang": "05.02.03",
      "Waktu": "10:40-12:20",
      "ZoomURL": "https://zoom.us/j/96731677231",
      "IsZoomURL": 1,
      "Kode": "ST044",
      "MataKuliah": "METODE NUMERIK",
      "JenisKuliah": "Teori",
      "Kelas": "21S1IF07-MetodeN(ST044)",
      "Nik": "190302246",
      "NamaDosen": "Rumini, M.Kom",
      "EmailDosen": "rumini@amikom.ac.id",
      },
      {
      "IdHari": 1,
      "IdKuliah": 66615,
      "Hari": "SENIN",
      "Ruang": "VR.01.02",
      "Waktu": "15:30-17:10",
      "ZoomURL": "https://zoom.us/j/96902430672",
      "IsZoomURL": 1,
      "Kode": "ST120",
      "MataKuliah": "BAHASA INDONESIA",
      "JenisKuliah": "Teori",
      "Kelas": "21S1IF07-BahasaI(ST120)",
      "Nik": "190302599",
      "NamaDosen": "Junaidi, S.Ag., M.Hum, Dr.",
      "EmailDosen": "junaidi.i@amikom.ac.id",
      },
      {
      "IdHari": 2,
      "IdJam": 3,
      "IdKuliah": 66619,
      "Hari": "SELASA",
      "Ruang": "07.02.01",
      "Waktu": "10:40-12:20",
      "ZoomURL": "https://zoom.us/j/94082450984",
      "IsZoomURL": 1,
      "Kode": "ST168",
      "MataKuliah": "BIG DATA DAN DATA MINING",
      "JenisKuliah": "Teori",
      "Kelas": "21S1IF-BigData1(ST168)",
      "Nik": "190302290",
      "NamaDosen": "Anna Baita, M.Kom",
      "EmailDosen": "anna@amikom.ac.id",
      },
      {
      "IdHari": 2,
      "IdKuliah": 67262,
      "Hari": "SELASA",
      "Ruang": "05.02.04",
      "Waktu": "15:30-17:10",
      "ZoomURL": "https://zoom.us/j/97966246447",
      "IsZoomURL": 1,
      "Kode": "ST163",
      "MataKuliah": "INOVASI PEMBAYARAN DIGITAL",
      "JenisKuliah": "Teori",
      "Kelas": "21S1IF-Inovasi1(ST163)",
      "Nik": "190302693",
      "NamaDosen": "Inggrid Yanuar Risca Pratiwi, S.S.T., M.Tr.T.",
      "EmailDosen": "inggridyrp@amikom.ac.id",
      },
      {
      "IdHari": 2,
      "IdKuliah": 66662,
      "Hari": "SELASA",
      "Ruang": "05.04.08",
      "Waktu": "15:30-17:10",
      "ZoomURL": "https://zoom.us/j/95664096215",
      "IsZoomURL": 1,
      "Kode": "ST154",
      "MataKuliah": "INTERNET OF THINGS",
      "JenisKuliah": "Teori",
      "Kelas": "21S1IF07-Interne(ST154)",
      "Nik": "190302707",
      "NamaDosen": "Bambang Pilu Hartato, S.Kom., M.Eng",
      "EmailDosen": "bambang.pilu@amikom.ac.id",
      },
      {
      "IdHari": 3,
      "IdJam": 1,
      "IdKuliah": 67300,
      "Hari": "RABU",
      "Ruang": "05.03.06",
      "Waktu": "07:00-08:40",
      "ZoomURL": "https://zoom.us/j/95866066953",
      "IsZoomURL": 1,
      "Kode": "ST150",
      "MataKuliah": "KEPEMIMPINAN",
      "JenisKuliah": "Teori",
      "Kelas": "21S1IF07-Kepemim(ST150)",
      "Nik": "190302581",
      "NamaDosen": "Narwanto Nurcahyo, SH, MM",
      "EmailDosen": "narwanto.n@amikom.ac.id ",
      },
      {
      "IdHari": 4,
      "IdJam": 2,
      "IdKuliah": 66411,
      "Hari": "KAMIS",
      "Ruang": "07.01.01",
      "Waktu": "08:50-10:30",
      "ZoomURL": "https://zoom.us/j/98777189740",
      "IsZoomURL": 1,
      "Kode": "ST170",
      "MataKuliah": "REKAYASA PERANGKAT LUNAK",
      "JenisKuliah": "Teori",
      "Kelas": "21S1IF-Rekayas6(ST170)",
      "Nik": "190302226",
      "NamaDosen": "Emigawaty, M.Kom",
      "EmailDosen": "emigawaty@amikom.ac.id",
      },
      {
      "IdHari": 4,
      "IdJam": 4,
      "IdKuliah": 66411,
      "Hari": "KAMIS",
      "Ruang": "07.01.01",
      "Waktu": "13:20-15:00",
      "ZoomURL": "https://zoom.us/j/98777189740",
      "IsZoomURL": 1,
      "Kode": "ST170",
      "MataKuliah": "REKAYASA PERANGKAT LUNAK",
      "JenisKuliah": "Teori",
      "Kelas": "21S1IF-Rekayas6(ST170)",
      "Nik": "190302226",
      "NamaDosen": "Emigawaty, M.Kom",
      "EmailDosen": "emigawaty@amikom.ac.id",
      },
      {
      "IdHari": 4,
      "IdKuliah": 66672,
      "Hari": "KAMIS",
      "Ruang": "07.02.02",
      "Waktu": "15:30-17:10",
      "ZoomURL": "https://zoom.us/j/98056003988",
      "IsZoomURL": 1,
      "Kode": "ST108",
      "MataKuliah": "E-COMMERCE",
      "JenisKuliah": "Teori",
      "Kelas": "21S1IF07-ECommer(ST108)",
      "Nik": "190302492",
      "NamaDosen": "Mujiyanto, M.Kom",
      "EmailDosen": "mujiyanto@amikom.ac.id",
      },
      {
      "IdHari": 5,
      "IdJam": 4,
      "IdKuliah": 66396,
      "Hari": "JUMAT",
      "Ruang": "VL.01",
      "Waktu": "13:20-15:00",
      "ZoomURL": "https://zoom.us/j/95298934093",
      "IsZoomURL": 1,
      "Kode": "ST044",
      "MataKuliah": "METODE NUMERIK",
      "JenisKuliah": "Praktikum",
      "Kelas": "21S1IF07-MetodeN(ST044)",
      "Nik": "190302246",
      "NamaDosen": "Rumini, M.Kom",
      "EmailDosen": "rumini@amikom.ac.id",
      },
      {
      "IdHari": 5,
      "IdJam": 4,
      "IdKuliah": 66620,
      "Hari": "JUMAT",
      "Ruang": "L 2.4.3",
      "Waktu": "13:20-15:00",
      "ZoomURL": "https://zoom.us/j/97967960975",
      "IsZoomURL": 1,
      "Kode": "ST168",
      "MataKuliah": "BIG DATA DAN DATA MINING",
      "JenisKuliah": "Praktikum",
      "Kelas": "21S1IF-BigData1(ST168)",
      "Nik": "190302290",
      "NamaDosen": "Anna Baita, M.Kom",
      "EmailDosen": "anna@amikom.ac.id",
      },
      {
      "IdHari": 5,
      "IdKuliah": 66419,
      "Hari": "JUMAT",
      "Ruang": "L 7.3.1",
      "Waktu": "15:30-17:10",
      "ZoomURL": "https://zoom.us/j/98982565524",
      "IsZoomURL": 1,
      "Kode": "ST153",
      "MataKuliah": "BIG DATA & PREDICTIVE ANALYTICS LANJUT",
      "JenisKuliah": "Praktikum",
      "Kelas": "21S1IF07-BigData(ST153)",
      "Nik": "190302705",
      "NamaDosen": "Ajie Kusuma Wardhana, S.Kom., M.Eng",
      "EmailDosen": "ajiekusuma@amikom.ac.id",
      }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const filteredJadwal = searchKeyword
    ? Jadwal.filter(
        (jadwal) => jadwal.MataKuliah.toLowerCase().includes(searchKeyword.toLowerCase()) || jadwal.NamaDosen.toLowerCase().includes(searchKeyword.toLowerCase()) || jadwal.Kelas.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : Jadwal;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="p-3 sm:p-5">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg divide-y divide-blue-400 border-blue-400 dark:border-gray-700 dark:divide-gray-700">
              <div className="py-3 px-4 bg-sky-200 dark:bg-gray-800">
                <div className="relative max-w-xs">
                  <label htmlFor="hs-table-search" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    name="hs-table-search"
                    id="hs-table-search"
                    className="p-3 pl-10 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-700 dark:border-gray-700 dark:text-gray-400"
                    placeholder="Search for items"
                    onChange={handleSearchChange}
                    value={searchKeyword}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                    <svg className="h-3.5 w-3.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto relative">
                <table className="min-w-full divide-y divide-blue-400 dark:divide-gray-800">
                  <thead className="bg-sky-200 dark:bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs text-black dark:text-white uppercase">
                        Hari
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs text-black dark:text-white uppercase">
                        Waktu
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs text-black dark:text-white uppercase">
                        Mata Kuliah
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs text-black dark:text-white uppercase">
                        Jenis Kuliah
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs text-black dark:text-white uppercase">
                        Ruangan
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs text-black dark:text-white uppercase">
                        Kelas
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs text-black dark:text-white uppercase">
                        Nama Dosen
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs text-black dark:text-white uppercase">
                        Zoom URL
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-400 dark:divide-gray-700 bg-sky-200 dark:bg-gray-800">
                    {filteredJadwal.map((jadwal) => (
                      <tr key={jadwal.IdKuliah}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-gray-200">{jadwal.Hari}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-gray-200">{jadwal.Waktu}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-gray-200">{jadwal.MataKuliah}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-gray-200">{jadwal.JenisKuliah}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-gray-200">{jadwal.Ruang}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-gray-200">{jadwal.Kelas}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-gray-200">{jadwal.NamaDosen}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-gray-200">
                          <a href={jadwal.ZoomURL}>
                            <button
                              data-tooltip-target="tooltip-camera"
                              type="button"
                              className="p-2.5 bg-gray-100 group rounded-full hover:bg-gray-200 mr-4 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700">
                              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                <path
                                  d="M1.984 7.506v6.74c.006 1.524 1.361 2.75 3.014 2.745h10.693c.303 0 .549-.225.549-.498v-6.74c-.008-1.523-1.363-2.75-3.014-2.744H2.531c-.302 0-.547.224-.547.497zm14.936 2.63l4.416-2.963c.383-.292.68-.219.68.309v9.036c0 .601-.363.528-.68.309L16.92 13.87v-3.734z"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="sr-only">Zoom</span>
                            </button>
                          </a>
                        </td>
                      </tr>
                    ))}
                    {searchKeyword !== "" && filteredJadwal.length === 0 && (
                      <tr>
                        <td colSpan={8} className="px-6 py-4 text-sm text-gray-800 dark:text-gray-200">
                          <p className="text-center">
                            Oops, Sepertinya <span className="font-bold">Mata Kuliah</span> atau <span className="font-bold">Dosen</span> Tidak Ditemukan
                          </p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
