import { Component, OnInit } from '@angular/core';
import { Student } from '../../classes/student';
import { StudentServiceService } from '../../services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: false,
  
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{

  constructor(private studentService: StudentServiceService,
    private router: Router
  ){ }


  students : Student[] = [];

  

  ngOnInit(): void {
      this.studentService.getAllStudent().subscribe(data =>{
        this.students=data;
      })
  }

  updateStudent(sId: number){
      console.log(sId);
      this.router.navigate(['update-student',sId]);
  }


  deleteStudent(sId: number) {
    if(confirm("Are you sure you want to delete this student?")) {
        this.studentService.deleteStudent(sId).subscribe(
            data => {
                alert("Student deleted successfully!");
                // Refresh the student list
                this.getAllStudents();  // You'll need to create this method if you haven't already
            },
            error => {
                alert("Error occurred while deleting the student!");
            }
        );
    }
}

// Add this method if you haven't already
getAllStudents() {
    this.studentService.getAllStudent().subscribe(
        data => {
            this.students = data;
        }
    );
}

  
}
