package com.fangio.backend.instructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/instructores")
public class InstructorController {

    private final InstructorService instructorService;

    public InstructorController(InstructorService instructorService) {
        this.instructorService = instructorService;
    }

    @PostMapping("/crear")
    public ResponseEntity<?> registrarInstructor(@RequestBody NuevoInstructorDTO dto) {
        try {
            String resultado = instructorService.crearInstructor(dto);
            return new ResponseEntity<>(resultado, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>("Error interno al crear el instructor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}