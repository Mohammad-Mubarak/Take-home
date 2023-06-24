package Taskmanagement.Taskmanagement.Services;

import Taskmanagement.Taskmanagement.Convertors.TaskConvertor;
import Taskmanagement.Taskmanagement.Entities.TaskEntity;
import Taskmanagement.Taskmanagement.EntryDtos.TaskEntryDto;
import Taskmanagement.Taskmanagement.Repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    TaskRepository taskRepository;

    public String addnewtask(TaskEntryDto task) {
        try {
            ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
            HttpServletRequest request = attr.getRequest();
            HttpSession session = request.getSession(true);
            String sessionId = session.getId();
            TaskEntity newTask = TaskConvertor.TaskEntryDtoToEntity(task);
            taskRepository.save(newTask);

            ArrayList<TaskEntity> DATA = new ArrayList<TaskEntity>();
            if (session.getAttribute("data") == null) {
                DATA.add(newTask);
                session.setAttribute("data", DATA);
                System.out.println(session.getAttribute("data"));
            } else {
                ArrayList<TaskEntity> temp = (ArrayList<TaskEntity>) session.getAttribute("data");
                temp.add(newTask);
                session.setAttribute("data", temp);
                System.out.println(session.getAttribute("data"));
            }
            return "Task Added SuccessFully";
        } catch (Exception e) {
            return "Something went wrong";
        }
    }

    public List<TaskEntity> alltaskAvailable() {
        return taskRepository.findAll();
    }

    public String taskupdate(TaskEntity updatedTask, int taskid) {
        Optional<TaskEntity> optionalTask = taskRepository.findById(taskid);
        if (optionalTask.isPresent()) {
            TaskEntity existingTask = optionalTask.get();
            // Updating the fields of the existing task with the values from the updated task
            existingTask.setName(updatedTask.getName());
            existingTask.setDescription(updatedTask.getDescription());
            existingTask.setStatus(updatedTask.getStatus());
            existingTask.setDuedate(updatedTask.getDuedate());
            // Save the updated task on Database
            taskRepository.save(existingTask);
            return "Task Updated SuccessFully";
        } else {
            return "Task Not Found with the specified ID";
        }

    }


    public String Deleteusertask(int id) {
        try {
            Optional<TaskEntity> optionalTask = taskRepository.findById(id);
            if (optionalTask.isPresent()) {
                taskRepository.deleteById(id);
                return "Deleted Successfully";
            } else {
                return "Not found in the database pls check id";
            }
        } catch (Exception e) {
            return "Something went wrong";
        }
    }

}
