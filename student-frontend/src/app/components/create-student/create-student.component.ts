import { Component, OnInit } from '@angular/core';
import { Student } from '../../classes/student';
import { StudentServiceService } from '../../services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: false,
  
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent implements OnInit{

  student: Student = new Student();


  constructor( private studentService: StudentServiceService,
     private router: Router){

  }

  ngOnInit(): void {
      
  }

  addStudentData(){
    this.studentService.addStudent(this.student).subscribe(data =>{
      alert("Student Data Inserted Successfully . ");
      this.gotoListOfStudentPage();
    },error=> alert("Sorry Unable to Insert Student Data")
    );
  }


  gotoListOfStudentPage(){
    this.router.navigate(['/students']);
  }


}
