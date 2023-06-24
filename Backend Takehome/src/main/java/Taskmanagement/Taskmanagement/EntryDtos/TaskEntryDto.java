package Taskmanagement.Taskmanagement.EntryDtos;

import Taskmanagement.Taskmanagement.Enums.taskstatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class TaskEntryDto {
    private String Name;
     private LocalDate duedate;
    private String Description;
    private taskstatus status;
}
