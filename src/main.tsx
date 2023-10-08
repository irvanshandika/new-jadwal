/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "preline";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "@pages/Home";
import ErrorPages from "@pages/ErrorPages";
import Catatan from "@pages/Catatan";
import JadwalPengganti from "@pages/JadwalPengganti";
import Dashboard from "@pages/Dashboard";
import TambahJadwal from "@pages/TambahJadwal";
import EditJadwal from "@pages/EditJadwal";

// component
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <ErrorPages />,
      },
      {
        path: "/catatan",
        element: <Catatan />,
      },
      {
        path: "/pengganti",
        element: <JadwalPengganti />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/tambah",
        element: <TambahJadwal />,
      },
      {
        path: "/edit/:id",
        element: <EditJadwal />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
