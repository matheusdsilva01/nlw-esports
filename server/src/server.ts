import express from 'express';
import { PrismaClient } from '@prisma/client';
import {
  convertHourStringToMinutes,
  convertMinutesToHourString,
} from './util/convertHoutToMinutes';
import cors from 'cors';

interface iAd {
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: [];
  hourStart: number;
  hourEnd: number;
  useVoiceChannel: boolean;
}

const app = express();
app.use(express.json());
app.use(cors());

const prismaClient = new PrismaClient();

/* GAMES */
app.get('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;
  const ads = await prismaClient.ad.findMany({
    select: {
      createdAt: true,
      gameId: true,
      hourEnd: true,
      hourStart: true,
      id: true,
      useVoiceChannel: true,
      weekDays: true,
      yearsPlaying: true,
      name: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return res.status(200).json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(','),
        hourStart: convertMinutesToHourString(ad.hourStart),
        hourEnd: convertMinutesToHourString(ad.hourEnd),
      };
    })
  );
});

app.post('/games/:id/ads', async (req, res) => {
  const gameId = req.params.id;
  const body = req.body;

  const ad = await prismaClient.ad.create({
    data: {
      gameId,
      name: body.name,
      yearsPlaying: body.yearsPlaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourStringToMinutes(body.hourStart),
      hourEnd: convertHourStringToMinutes(body.hourEnd),
      useVoiceChannel: body.useVoiceChannel,
    },
  });

  return res.status(201).json(ad);
});
/* ADS */
app.get('/ads', async (req, res) => {
  const ads = await prismaClient.ad.findMany();
  return res.status(200).json(ads);
});

app.get('/ads/:id/discord', async (req, res) => {
  const adId = req.params.id;

  const ad = await prismaClient.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return res.json(ad);
});

app.listen(3333);
