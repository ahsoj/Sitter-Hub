import express from 'express';
import BookingController from '../controllers/bookingController';
import { Experiance } from '@prisma/client';

const router = express.Router();
const bookingController = new BookingController();

router.post('/create_book', async (req, res) => {
    try {
        const {
            datefrom,
            dateTo,
            numberChiled,
            cord,
            description,
            experiance,
        } = req.body;
        await bookingController.createBooking({
            datefrom,
            dateTo,
            numberChiled,
            cord,
            description,
            experiance,
        });
        res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

router.get('/books', async (req, res) =>{
    try {
    await bookingController.getAllBooking();
    res.status(201).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

router.get('/book/:id', async (req, res) =>{
    try {
        const { id } = req.params;
        await bookingController.getBookingById({ id });
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

router.get('/book/experiance', async (req, res) =>{
    try {
        const { experiance } = req.body;
        // const exp = ['Entry', 'Intermideate', 'Expert'];
        // for (let i in exp) {
        //     if (experiance === exp[i]) {
        //         await bookingController.getBookingByExperiance( { experiance });  
        //     }
        // }   
       if (experiance === 'Entry') {
        await bookingController.getBookingByExperiance( {experiance});
       }
       else if (experiance === 'Intermideate') {
        await bookingController.getBookingByExperiance( {experiance});
       }
       else if (experiance === 'Expert') {
        await bookingController.getBookingByExperiance( {experiance});
       }
        
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
})



export default router;