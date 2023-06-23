package Taskmanagement.Taskmanagement.Controller;

import Taskmanagement.Taskmanagement.Entities.TaskEntity;
import Taskmanagement.Taskmanagement.EntryDtos.TaskEntryDto;
import Taskmanagement.Taskmanagement.Services.TaskService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.web.bind.annotation.*;
import org.springframework.ui.Model;

import java.lang.reflect.Array;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TaskController {
    @Autowired
    TaskService taskservice;


    @GetMapping("/get-all-tasks")
    public List<TaskEntity> alltasks() {
        return taskservice.alltaskAvailable();
    }


    @PostMapping("/add-task")
    public String AddTask(@RequestBody TaskEntryDto task, HttpSession session) {
         session.setAttribute("user","md");
        return taskservice.addnewtask(task);
    }

    @PutMapping("/update-task/{id}")
    public String taskupdate(@RequestBody TaskEntity updatedtask, @PathVariable int id) {
        return taskservice.taskupdate(updatedtask, id);
    }


    @DeleteMapping("/delete-task/{id}")
    public String DeleteTask(@PathVariable int id) {
        return taskservice.Deleteusertask(id);
    }
}
