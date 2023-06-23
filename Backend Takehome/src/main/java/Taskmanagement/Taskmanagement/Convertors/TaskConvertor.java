package Taskmanagement.Taskmanagement.Convertors;

import Taskmanagement.Taskmanagement.Entities.TaskEntity;
import Taskmanagement.Taskmanagement.EntryDtos.TaskEntryDto;

public class TaskConvertor {

    public static TaskEntity TaskEntryDtoToEntity(TaskEntryDto TaskEntryDto){
        TaskEntity taskentity = TaskEntity.builder().duedate(TaskEntryDto.getDuedate()).Description(TaskEntryDto.getDescription()).Name(TaskEntryDto.getName()).status(TaskEntryDto.getStatus())
        .build();
        return taskentity;
    }
}
