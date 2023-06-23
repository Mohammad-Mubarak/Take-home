package Taskmanagement.Taskmanagement.EntryDtos;

import Taskmanagement.Taskmanagement.Enums.taskstatus;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

import java.util.Date;

@Data
public class TaskEntryDto {
    private String Name;
     private Date duedate;
    private String Description;
    private taskstatus status;
}
