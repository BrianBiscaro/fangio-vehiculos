package com.fangio.backend.instructor;

import java.net.URI;
import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/instructores")
@RequiredArgsConstructor
public class InstructorController {

    private final InstructorService instructorService;

    @GetMapping
    public ResponseEntity<List<ResponseInstructorDTO>> getInstructores() {
        return ResponseEntity.ok(instructorService.getInstructores());
    }

    @PostMapping
    public ResponseEntity<ResponseInstructorDTO> createInstructor(@RequestBody RequestInstructorDTO requestDto) {

        ResponseInstructorDTO created = instructorService.createInstructor(requestDto);

        return ResponseEntity
                .created(URI.create("/api/ventas/" + created.getId()))
                .body(created);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseInstructorDTO> updateInstructor(@RequestBody RequestInstructorDTO requestDto,
            @PathVariable Long id) {

        return ResponseEntity.ok(instructorService.updateInstructor(id, requestDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInstructor(@PathVariable Long id) {
        instructorService.deleteInstructor(id);
        return ResponseEntity.noContent().build();
    }

}