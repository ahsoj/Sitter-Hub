import { prisma } from '../utils/prisma';
import { Experiance } from '../types/types';

class BookingController {
  //create a new booking
  async createBooking(data: {
    datefrom: Date;
    dateTo: Date;
    numberChiled: number;
    cord: string;
    description: string;
    experiance: Experiance;
  }) {
    const booking = await prisma.booking.create({
      data: {
        datefrom: data.datefrom,
        dateTo: data.dateTo,
        numberChiled: data.numberChiled,
        cord: data.cord,
        description: data.description,
        experiance: data.experiance,
      },
    });
    console.log(`Created user with ID ${booking.id}`);
  }

  //get all booking
  async getAllBooking() {
    return await prisma.booking.findMany({
      include: {
        proposal: false,
      },
    });
  }

  //get single booking by id
  async getBookingById(data: { id: string }) {
    return await prisma.booking.findUnique({
      where: {
        id: data.id,
      },
      include: {
        Parent: true,
        proposal: true,
      },
    });
  }

  //getBooking By ExperianceLevel
  async getBookingByExperiance(data: { experiance: Experiance }) {
    return await prisma.booking.findMany({
      where: {
        experiance: data.experiance,
      },
    });
  }
}
export default BookingController;
