class student
         {
           constructor(name,rollno) {
        this.name=name;
        this.rollno=rollno;
       
         }
       display() {
        
        console.log(this.name);
        console.log(this.rollno);
         }
        }


         let s1=new student("dhruv",101);
          let s2=new student("panwar",202);
           let s3=new student("mailik",103);

           console.log(s2);
        
           s2.display();
           console.log(s2.name);