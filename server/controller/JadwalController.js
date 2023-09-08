// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import { prisma } from '../libs/prisma.js';

export const getJadwals = async (req, res) => {
  try {
    const response = await prisma.jadwal.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getJadwalsById = async (req, res) => {
  try {
    const response = await prisma.jadwal.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
export const createJadwals = async (req, res) => {
  const { hari, waktu, mataKuliah, ruangan } = req.body;
  try {
    const jadwal = await prisma.jadwal.create({
      data: {
        hari,
        waktu,
        mataKuliah,
        ruangan,
      },
    });
    res.status(201).json(jadwal);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
export const updateJadwals = async (req, res) => {
  const { hari, waktu, mataKuliah, ruangan } = req.body;
  try {
    const jadwal = await prisma.jadwal.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        hari,
        waktu,
        mataKuliah,
        ruangan,
      },
    });
    res.status(200).json(jadwal);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
export const deleteJadwals = async (req, res) => {
  try {
    const jadwal = await prisma.jadwal.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(jadwal);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};
