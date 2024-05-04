package oblig.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @PostMapping("/booking")
    public String addBooking(@RequestBody Booking newBooking){
        bookingRepository.save(newBooking);
        return "Booking added successfully";
    }
}
