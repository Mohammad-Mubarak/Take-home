package Taskmanagement.Taskmanagement.Controller;

import Taskmanagement.Taskmanagement.Entities.TaskEntity;
import Taskmanagement.Taskmanagement.EntryDtos.TaskEntryDto;
import Taskmanagement.Taskmanagement.Services.TaskService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TaskController {
    @Autowired
    TaskService taskservice;

    @GetMapping("/get-all-tasks")
    public List<TaskEntity> alltasks(HttpSession session) {
        System.out.println(session.getAttribute("data"));
        return taskservice.alltaskAvailable();
    }


    @PostMapping("/add-task")
    public String AddTask(@RequestBody TaskEntryDto task) {
        return taskservice.addnewtask(task);
    }

    @PutMapping("/update-task/{id}")
    public String taskupdate(@RequestBody TaskEntity updatedtask, @PathVariable int id, HttpSession session) {
        ArrayList<TaskEntity> dataSession = (ArrayList<TaskEntity>) session.getAttribute("data");
        if (dataSession != null) {
            for (int i = 0; i < dataSession.size(); i++) {
                TaskEntity taskEntity = dataSession.get(i);
                if (taskEntity.getId() == id) {
                    // Updating the task with the new updated task data
                    taskEntity.setName(updatedtask.getName());
                    taskEntity.setDescription(updatedtask.getDescription());
                    taskEntity.setStatus(updatedtask.getStatus());
                    taskEntity.setDuedate(updatedtask.getDuedate());

                    // Saving the updated task in the session
                    dataSession.set(i, taskEntity);
                    break;
                }
            }
        }
        System.out.println(dataSession);
        session.setAttribute("data", dataSession);
        return taskservice.taskupdate(updatedtask, id);
    }


    @DeleteMapping("/delete-task/{id}")
    public String DeleteTask(@PathVariable int id, HttpSession session) {
        ArrayList<TaskEntity> dataSession = (ArrayList<TaskEntity>) session.getAttribute("data");

        if (dataSession != null) {
            for (int i = 0; i < dataSession.size(); i++) {
                TaskEntity taskEntity = dataSession.get(i);
                if (taskEntity.getId() == id) {
                    dataSession.remove(i);
                    session.setAttribute("data", dataSession);
                    break;
                }
            }
        }
        System.out.println(session.getAttribute("data"));
        return taskservice.Deleteusertask(id);
    }
}
