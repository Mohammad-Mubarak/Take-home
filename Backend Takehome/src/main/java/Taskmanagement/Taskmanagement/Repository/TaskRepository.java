package Taskmanagement.Taskmanagement.Repository;

import Taskmanagement.Taskmanagement.Entities.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<TaskEntity,Integer> {
}
