import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCards = async (req: Request, res: Response) => {
  try {
    const cards = await prisma.card.findMany();
    res.status(200).json(cards);
  } catch (error: any) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.stack,
    });
  }
};

export const postCards = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    const newCard = await prisma.card.create({
      data: {
        title,
        description,
      },
    });
    res.status(201).json(newCard);
  } catch (error: any) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.stack,
    });
  }
};

export const getCardsWithTitle = async (req: Request, res: Response) => {
  try {
    const { title } = req.params;
    const card = await prisma.card.findUnique({
      where: { title },
    });

    if (card) {
      res.status(200).json(card);
    } else {
      res.status(404).json({ error: 'Card not found' });
    }
  } catch (error: any) {
    res.status(500).json({
      message: 'Internal Server Error',
      error: error.stack,
    });
  }
};
