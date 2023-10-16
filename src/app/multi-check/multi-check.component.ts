import { Component, OnInit } from '@angular/core';
//import { Student, Course } from '../models';

@Component({
  selector: 'app-multi-check',
  templateUrl: './multi-check.component.html',
  styleUrls: ['./multi-check.component.scss']
})


export class MultiCheckComponent implements OnInit {

  constructor() { }
  courses!: Course[];

  sno: number = 0;
  editId!: number;
  student: Student = new Student();
  studentsList: Student[] = [];




  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courses = [
      { id: 1, name: "HTML", checked: false },
      { id: 2, name: "CSS", checked: false },
      { id: 3, name: "Javascript", checked: false },
      { id: 4, name: "PHP", checked: false },
      { id: 5, name: "Angular", checked: false }

    ];
  }

  submit() {
    this.student.coursesIds = this.courses.filter(item => item.checked == true).map(item => item.id).join(",").toString();
    this.student.courseNames = this.courses.filter(item => item.checked == true).map(item => item.name).join(",").toString();

    // let ids = this.studentsList.map(item => item.id);
    //debugger
    let index = this.studentsList.findIndex(item=>item.id==this.student.id);
    if (index==-1) {
      this.sno++;
      this.student.id = this.sno;
      this.studentsList.push(this.student);
    } else {
      this.studentsList[index] = this.student;
    }

    this.student = new Student();
    this.getCourses();
  }

  edit(std: Student) {
    this.student.id = std.id;
    this.student.name = std.name;
    let coursesIds = std.coursesIds.split(",");
    // this.courses.forEach((item) => {
    //   for (let i = 0; i < coursesIds.length; i++) {
    //     if (+coursesIds[i] == item.id) {
    //       item.checked = true;
    //     }
    //   }
    // })

    this.courses.forEach((item)=>{
      if(coursesIds.includes(item.id.toString())){
        item.checked=true;
      }
    })
  }

}

export class Student {
  id!: number;
  name!: string;
  coursesIds!: string;
  courseNames!: string;
}

export class Course {
  id!: number;
  name!: string;
  checked!: boolean;
}

