import express from 'express';
import BookingController from '../controllers/bookingController';
import { prisma } from '../utils/prisma';
import { Experiance } from '@prisma/client';

const router = express.Router();
const bookingController = new BookingController();

router.post('/create_book', async (req, res) => {
  try {
    const { datefrom, dateTo, numberChiled, cord, description } = req.body;
    //  const parentId = req.body.parentId
    let experiance = req.body.experiance;
    if (experiance === 'Entry') {
      experiance = Experiance.Entry;
    } else if (experiance === 'Intermideate') {
      experiance = Experiance.Intermideate;
    } else {
      experiance = Experiance.Expert;
    }
    const booking = await bookingController.createBooking({
      datefrom,
      dateTo,
      numberChiled,
      cord,
      description,
      experiance,
      // parentId
    });
    res.status(201).send(booking);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

router.get('/books', async (req, res) => {
  try {
    const bookings = await bookingController.getAllBooking();
    res.status(201).json(bookings);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

router.get('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookingController.getBookingById({ id });
    res.status(201).send(book);
  } catch (error) {
    console.error(error);
    res.status(500).send('no such booking!');
  }
});
router.get('/current_book/:parentId', async (req, res) => {
  try {
    const { parentId } = req.params;
    const book = await bookingController.getBookingByOwner({ parentId });
    res.status(201).send(book);
  } catch (error) {
    console.error(error);
    res.status(500).send('no such booking!');
  }
});

router.get('/book/exp/:experiance', async (req, res) => {
  try {
    const { experiance } = req.params;
    // const exp = ['Entry', 'Intermideate', 'Expert'];
    // for (let i in exp) {
    //     if (experiance === exp[i]) {
    //         await bookingController.getBookingByExperiance( { experiance });
    //     }
    // }
    let exp;
    if (experiance === 'Entry') {
      exp = await bookingController.getBookingByExperiance({ experiance });
    } else if (experiance === 'Intermideate') {
      exp = await bookingController.getBookingByExperiance({ experiance });
    } else if (experiance === 'Expert') {
      exp = await bookingController.getBookingByExperiance({ experiance });
    }
    res.status(201).send(exp);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

router.get('/book/num_kid/:num', async (req, res) => {
  try {
    const numberChiled = req.params.num;
    const book = await bookingController.getBookingByNumberOfChiled({
      numberChiled,
    });
    res.status(201).send(book);
  } catch (error) {
    console.error(error);
    res.status(500).send('Sorry there is no booking in these number of child.');
  }
});

export default router;
