import { Component, OnInit } from '@angular/core';
import { Student } from '../../classes/student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../../services/student-service.service';

@Component({
  selector: 'app-update-student',
  standalone: false,
  
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent implements OnInit{

  constructor(private activeRouter: ActivatedRoute,
    private studentService: StudentServiceService,
    private router: Router
  ){

  }

  student: Student = new Student();

  sId!:  number;


  ngOnInit(): void {
      this.sId=this.activeRouter.snapshot.params['sId'];
      console.log(this.sId);
      this.studentService.getStudentById(this.sId).subscribe(data =>{
        this.student = data;
        console.log(this.student);
      })
  }

  updateStudentData(){

    this.studentService.updateStudentData(this.student).subscribe(data =>{
      alert("Updated Successfully !");
      this.router.navigate(['/students']);

    }, error => alert("Sorry Unable to Update !") )

  }

  

}
