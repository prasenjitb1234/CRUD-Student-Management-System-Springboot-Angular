import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../classes/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
 
  


  baseURL = "http://localhost:8080/student";

  constructor(private httpClient: HttpClient) { }


  addStudent( student : Student){
    console.log(student);
    return this.httpClient.post(`${this.baseURL}`,student);

  }


  getAllStudent():Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }



  getStudentById(sId:number):Observable<Student> {
    console.log(sId);
    return this.httpClient.get<Student>(`${this.baseURL}/${sId}`);
  }

  updateStudentData(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${this.baseURL}`,student);
  }


  deleteStudent(sId: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${sId}`);
}
  
  

}
