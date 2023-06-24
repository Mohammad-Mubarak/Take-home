package Taskmanagement.Taskmanagement.Entities;

import Taskmanagement.Taskmanagement.Enums.taskstatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table(name = "usertask")
public class TaskEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


   private LocalDate duedate;

   private String Name;

   private String Description;

    @Enumerated(value = EnumType.STRING)
    private taskstatus status;

}
