import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CalendarService } from 'src/app/services/calendar.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { WeekComponent } from './week/week.component';
import { DayComponent } from './week/day/day.component';
import { DaysetupComponent } from './week/daysetup/daysetup.component';
import { EmployeesService } from 'src/app/services/employees.service';
import { Shift } from 'src/app/models/shift';
import { Employee } from 'src/app/models/employee';
import { ShiftsService } from 'src/app/services/shifts.service';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [BsModalService]
})
export class CalendarComponent implements OnInit {


  //Calendar+++++++++++++++++++++++++++++++++++++++++++++++
  // days = [];
  daysInYear = [];
  date;
  date2;
  month;
  month2;
  year;
  daysInMonth = [];
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++
  unsavedShifts;
  unsavedEmployees = [];


  daysSetup = [{ name: "Monday", shortName: "MON" }, { name: "Tuesday", shortName: "TUE" }, { name: "Wednesday", shortName: "WED" }, { name: "Thursday", shortName: "THU" }, { name: "Friday", shortName: "FRI" }, { name: "Saturday", shortName: "SAT" }, { name: "Sunday", shortName: "SUN" }]
  setupShifts = [];
  bsModalRef: BsModalRef;
  newEmpObject = [];

  constructor(public calendarService: CalendarService, private modalService: BsModalService, public employeeService: EmployeesService, public shiftService: ShiftsService) {
  }


  async ngOnInit() {
    this.unsavedEmployees = await this.getEmployees();
    console.log(this.unsavedEmployees)
    this.setupShifts = this.shuffle(await this.getShifts());
    console.log(this.setupShifts)
    this.date = moment();
    this.date2 = moment();
    this.month = this.date.format('MMMM')
    this.month2 = this.date2.format('MMMM')
    this.year = this.date.format('YYYY')

    this.month2 = this.date2.format('MMMM')
    this.daysInYear = this.getAllWeeksInYear(this.date);
    this.daysInMonth = this.getMonth(this.month, this.daysInYear);
  }



  employeeObjectForDisplay(employees) {
    let newArray = [];
    let empShiftsObject;
 
    employees.forEach((emp) => {
      let empObject = { name: emp.name, hpw: emp.hpw, empShifts: [], hworked: emp.hworked }
      empShiftsObject = {
        Monday: { shiftHours: null, shiftDay: null, shiftStart: null, shiftFinish: null },
        Tuesday: { shiftHours: null, shiftDay: null, shiftStart: null, shiftFinish: null },
        Wednesday: { shiftHours: null, shiftDay: null, shiftStart: null, shiftFinish: null },
        Thursday: { shiftHours: null, shiftDay: null, shiftStart: null, shiftFinish: null },
        Friday: { shiftHours: null, shiftDay: null, shiftStart: null, shiftFinish: null },
        Saturday: { shiftHours: null, shiftDay: null, shiftStart: null, shiftFinish: null },
        Sunday: { shiftHours: null, shiftDay: null, shiftStart: null, shiftFinish: null }
      }
      emp.shiftsWorked.forEach((shiftEmp) => {
        
        console.log()

        if(shiftEmp.shiftDay === "Monday"){
          
        }
        if(shiftEmp.shiftDay === "Tuesday"){
          
        }
        if(shiftEmp.shiftDay === "Wednesday"){
          
        }
        if(shiftEmp.shiftDay === "Thursday"){
          
        }
        if(shiftEmp.shiftDay === "Friday"){
          
        }
        if(shiftEmp.shiftDay === "Saturday"){
          
        }
        if(shiftEmp.shiftDay === "Sunday"){
          
        }
        switch (shiftEmp.shiftDay){
          case "Monday":
          empShiftsObject.Monday.shiftHours = shiftEmp.shifthours;
          empShiftsObject.Monday.shiftDay = shiftEmp.shiftDay;
          empShiftsObject.Monday.shiftStart = shiftEmp.timeStart;
          empShiftsObject.Monday.shiftFinish = shiftEmp.timeFinish;
          break;
          case "Tuesday":
          empShiftsObject.Tuesday.shiftHours = shiftEmp.shifthours;
          empShiftsObject.Tuesday.shiftDay = shiftEmp.shiftDay;
          empShiftsObject.Tuesday.shiftStart = shiftEmp.timeStart;
          empShiftsObject.Tuesday.shiftFinish = shiftEmp.timeFinish;
          break;
          
          case "Wednesday":
          empShiftsObject.Wednesday.shiftHours = shiftEmp.shifthours;
          empShiftsObject.Wednesday.shiftDay = shiftEmp.shiftDay;
          empShiftsObject.Wednesday.shiftStart = shiftEmp.timeStart;
          empShiftsObject.Wednesday.shiftFinish = shiftEmp.timeFinish;
          break;
          case "Thursday":
          empShiftsObject.Thursday.shiftHours = shiftEmp.shifthours;
          empShiftsObject.Thursday.shiftDay = shiftEmp.shiftDay;
          empShiftsObject.Thursday.shiftStart = shiftEmp.timeStart;
          empShiftsObject.Thursday.shiftFinish = shiftEmp.timeFinish;
          break;
          case "Friday":
          empShiftsObject.Friday.shiftHours = shiftEmp.shifthours;
          empShiftsObject.Friday.shiftDay = shiftEmp.shiftDay;
          empShiftsObject.Friday.shiftStart = shiftEmp.timeStart;
          empShiftsObject.Friday.shiftFinish = shiftEmp.timeFinish;
          break;
          case "Saturday":
          empShiftsObject.Saturday.shiftHours = shiftEmp.shifthours;
          empShiftsObject.Saturday.shiftDay = shiftEmp.shiftDay;
          empShiftsObject.Saturday.shiftStart = shiftEmp.timeStart;
          empShiftsObject.Saturday.shiftFinish = shiftEmp.timeFinish;
          break;
          case "Sunday":
          empShiftsObject.Sunday.shiftHours = shiftEmp.shifthours;
          empShiftsObject.Sunday.shiftDay = shiftEmp.shiftDay;
          empShiftsObject.Sunday.shiftStart = shiftEmp.timeStart;
          empShiftsObject.Sunday.shiftFinish = shiftEmp.timeFinish;
          break;
        }


      })

      empObject.empShifts.push(empShiftsObject)
      newArray.push(empObject)

    })

    this.newEmpObject = newArray;
  }



  //CALENDAR+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  getAllWeeksInYear(date) {
    let todaysYearsMonthsNumber = date.isoWeeksInYear();
    let todaysYear = date.format('Y')
    let arrayDays = [];
    for (let i = 0; i < todaysYearsMonthsNumber; i++) {
      arrayDays.push({ weekNumber: i + 1, daysInWeek: this.getAllDaysInWeek(i + 1), month: this.getAllDaysInWeek(i + 1)[0].month, year: todaysYear, isGenerated: false, setupIsApplied: false })
    }
    console.log(arrayDays)
    return arrayDays
  }
  getAllDaysInWeek(week) {
    let startOfWeek = moment(`${week}`, 'WWW').startOf('isoWeeks');
    let endOfWeek = moment(`${week}`, 'WWW').endOf('isoWeeks');
    let days = [];
    let day = startOfWeek;
    while (day <= endOfWeek) {
      days.push({ dayMoment: day, arrayOfShifts: [], dayName: day.format('dddd'), dayNumber: day.format('D'), month: day.format('MMMM'), dayYear: day.format('Y'), dayDate: day.format('L'), dayWeek: day.format('W') });
      day = day.clone().add(1, 'd');
    }
    return days
  }



  getMonth(month, arrayDays) {
    let result = arrayDays.filter((element) => {
      return element.month === month
    })

    console.log(result)
    return result
  }

  getNextMonth(arrayDays) {
    let nextMonth = this.date2.add(1, 'month').format('MMMM')

    console.log(nextMonth, "nextmonthdate")

    let result = arrayDays.filter((element) => {
      return element.month === nextMonth
    });

    console.log(result, "result")
    this.month2 = nextMonth
    this.daysInMonth = result;

  }

  getPreviousMonth(arrayDays) {
    let prevMonth = this.date2.subtract(1, 'month').format('MMMM')
    let result = arrayDays.filter((element) => {
      return element.month === prevMonth
    });

    console.log(result, "result")
    this.month2 = prevMonth
    this.daysInMonth = result;

  }

  // nextMonth(){
  //   this.date.add(1, 'M');
  //   this.daysArray = this.createCalendar(this.date);
  // }

  // prevMonth(){
  //   this.date.subtract(1, 'M');
  //   this.daysArray = this.createCalendar(this.date);
  // }
  test(week) {
    let startOfWeek = moment(`${week}`, 'WWW').startOf('isoWeeks');
    let date = moment({ year: 2020 }).add(1, 'years')
    let startWeek = date.startOf('week').add(1, 'day')
    console.log(startWeek, "startWeek")
    // let test = moment('7', 'WWW').startOf('isoWeek')
    // let test2 = moment().add(1, 'year').week(2).startOf('isoWeek')
    // let test3 = date.add(1, 'week')
    // let testtest = test3.startOf('isoWeek')
    // let test4 = moment().startOf('isoWeeks')
    // console.log( testtest, "test")

  }



  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






















  getShifts(): any {
    return new Promise((resolve, reject) => {
      this.shiftService.getShifts().subscribe((res) => {
        resolve(res)
      })
    })
  }

  async generateRota(week) {
    this.unsavedShifts = this.putEmployeesInThisWeek(week)
    this.putEmployeesInShifts(this.unsavedShifts)
    week.isGenerated = true;
    // this.calendarService.createWeek(week).subscribe((res) => {
    //   console.log(res)
    // })
    let counterEmployeeHours = [];
    let counterShiftHours = 0;
     this.emergencyCheckShift(this.unsavedEmployees, this.unsavedShifts)
     this.emergencyCheckShift(this.unsavedEmployees, this.unsavedShifts)
    this.checkWhatEmployeesAreNotFullyBooked(this.unsavedEmployees)
    console.log(this.unsavedShifts);
    console.log(this.unsavedEmployees);
    const finalShifts = this.checkIfShiftsAreUncovered(this.unsavedShifts)

    this.finalChecks(this.unsavedEmployees, finalShifts)
    this.employeeObjectForDisplay(this.unsavedEmployees)
    this.unsavedEmployees = await this.getEmployees();
    this.unsavedShifts = this.shuffle(await this.getShifts())
   
  }

  checkIfShiftsAreUncovered(shifts){
    const result = shifts.filter((shift) => {
      return shift.fullyBooked === false
    })
    console.log(result, "result2")
    return result;
  }

  checkWhatEmployeesAreNotFullyBooked(employees){
    const result = employees.filter((employee) => {
      
      return employee.fullyBooked === false
    })
    console.log(result, "result")
  }

  finalChecks(employees, shifts){
    
    let solution = [];
    employees.forEach((emp) => {
      let empHpw = emp.hpw - emp.hworked
      let empObject = {name: emp.name, newShifts: []} 
      shifts.forEach((shift) => {
        let isworkingThisShift = this.isWorkinInThisShift(shift, emp);
        let isWorkingToday = this.avoidEmployeToWorkSameDay(emp, shift)
        
        let shiftDay = shift.day.normalize()
        let shiftTimeStart = Number(shift.timeStart)
        let shiftTimeFinish = Number(shift.timeFinish)
        let empAvStart = Number(emp.aviability[shiftDay]['0']);
        let empAvFinish = Number(emp.aviability[shiftDay]['1']);
        if((empHpw > shift.hours) && (emp.aviability[shiftDay]['0'] !== null) && (empAvStart <= shiftTimeStart) && (empAvFinish >= shiftTimeFinish) && (isworkingThisShift !== true) && (isWorkingToday !== true) && (shift.fullyBooked !== true)){
          empObject.newShifts.push({emp: emp.name, shiftDay: shift.day, shiftHours: shift.hours, hpw: emp.hpw, hworked: emp.hworked})
        }
      })
      solution.push(empObject)
    })
    console.log(solution, "solution")
  }

  emergencyPutEmp(shift, employees) {
    employees.forEach((emp) => {
      this.putShiftFullyBooked(shift);

      let shiftDay = shift.day.normalize()
      let shiftTimeStart = Number(shift.timeStart)
      let shiftTimeFinish = Number(shift.timeFinish)

      let empAvStart = Number(emp.aviability[shiftDay]['0']);
      let empAvFinish = Number(emp.aviability[shiftDay]['1']);
      let isworkingThisShift = this.isWorkinInThisShift(shift, emp);
      let isWorkingToday = this.avoidEmployeToWorkSameDay(emp, shift)


      let empHpw = emp.hpw - emp.hworked
      if (emp.aviability[shiftDay]['0'] === null) {
        return
      }
      if (emp.fullyBooked === true) {
        return
      }
      if ((shift.fullyBooked !== true) && (empHpw >= shift.hours) && (empAvStart <= shiftTimeStart) && (empAvFinish >= shiftTimeFinish) && (isworkingThisShift !== true) && (isWorkingToday !== true)) {
        emp.hworked += shift.hours
        shift.arrayOfWorkers.push(emp)
        emp.shiftsWorked.push({ shifthours: shift.hours, shiftDay: shift.day, timeStart: shift.timeStart, timeFinish: shift.timeFinish  })
      }
    })
  }

  emergencyCheckShift(employees, shifts) {
    this.shuffle(shifts)

    shifts.forEach((shift) => {
      this.shuffle(shifts)

      this.emergencyPutEmp(shift, employees)
    })
  }

  putEmployeesInThisWeek(week) {
    let arrayShifts = [];
    week.daysInWeek.forEach((day) => {
      day.arrayOfShifts.forEach((shift) => {
        arrayShifts.push(shift);
      })
    })

    return arrayShifts;
  }



  applySetupTool1(shiftSetup) {
    this.daysInYear.forEach((week) => {
      week.daysInWeek.forEach((day) => {
        if (shiftSetup.day == day.dayName) {
          shiftSetup.date = day.dayMoment.format('L')
          let newObjShift = JSON.parse(JSON.stringify(shiftSetup));

          day.arrayOfShifts.push(newObjShift)
        }
      });
      week.setupIsApplied = true
    });
  }

  applySetup() {
    this.setupShifts.forEach((setupShift) => {
      this.applySetupTool1(setupShift)
    })
    console.log(this.daysInYear)
  }






  //Open modal functions ****************************


  openModal(day) {
    const initialState = {
      data: [
        day
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(DayComponent, { initialState, class: 'modal-lg' });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  openModalForSetup(day) {
    const initialState = {
      data: [
        day
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(DaysetupComponent, { initialState, class: 'modal-lg' });
    this.bsModalRef.content.closeBtnName = 'Close';

  }

  openViewRotaModal(week) {
    
    const initialState = {
      data: [
       week, this.newEmpObject
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(WeekComponent, { initialState, class: 'modal-lg' });
    this.bsModalRef.content.closeBtnName = 'Close';
    console.log(week)
  }
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  //put workers in shifts****************************************
  putEmployeesInShifts(shifts) {
    this.shuffle(shifts)
    shifts.forEach((shift) => {
      this.shuffle(shifts)
      this.putEmployeesInShift(shift)
    })
    shifts.forEach((shift) => {
      this.shuffle(shifts)

      this.putEmployeesInShift(shift)
    })
    shifts.forEach((shift) => {
      this.shuffle(shifts)

      this.putEmployeesInShift(shift)
    })
    shifts.forEach((shift) => {
      this.shuffle(shifts)

      this.putEmployeesInShiftLessRefined(shift)
    });
    shifts.forEach((shift) => {
      this.shuffle(shifts)

      this.putEmployeesInShiftLessRefined(shift)
    });
    shifts.forEach((shift) => {
      this.shuffle(shifts)

      this.putEmployeesInShiftLessRefined(shift)
    });
    this.unsavedEmployees.forEach((employee) => {
      this.getColleagues(employee, shifts)
    })
    if (this.checkIfThereIsAnyOneThatCanWork(shifts) === true) {
      this.putEmployeesInShifts(shifts);
    }

  }


  putEmployeesInShift(shift: Shift) {
    let employees = this.getAllWithLessHoursWorked(this.unsavedEmployees)
    employees.forEach((empl) => {
      this.putShiftFullyBooked(shift);

      let shiftDay = shift.day.normalize()
      let empStart = empl.aviability[shiftDay].map((av) => av)
      const isWorkingToday = this.avoidEmployeToWorkSameDay(empl, shift)
      const newHpw = empl.hpw - empl.hworked;
      if ((empStart['0'] === null)) {
        return
      }
      if ((shift.fullyBooked !== true) && (isWorkingToday === false) &&
        (empl.fullyBooked === false) &&
        (empl.hpw >= shift.hours) &&
        (shift.workersRequired >= shift.arrayOfWorkers.length) &&
        (newHpw >= shift.hours) &&
        (!shift.arrayOfWorkers.includes(empl)) &&
        (empl.position.includes(shift.role))) {
        this.actionOnEmployee(empl, shift);
      }
    });
  }

  putShiftFullyBooked(shift: Shift) {
    if (shift.arrayOfWorkers.length >= shift.workersRequired) {
      shift.fullyBooked = true
    }else{
      shift.fullyBooked = false
    }

  }

  putEmployeesInShiftLessRefined(shift: Shift) {
    this.unsavedEmployees.forEach((empl) => {
      this.putShiftFullyBooked(shift)

      const isWorkingToday = this.avoidEmployeToWorkSameDay(empl, shift)
      let isworkingThisShift = this.isWorkinInThisShift(shift, empl);

      if (empl.hpw <= empl.hworked) {
        empl.fullyBooked = true;
      }
      this.putTrulyFullyBookedEmployees(empl);
      const newHpw = empl.hpw - empl.hworked;
      if ((shift.fullyBooked !== true) && (isWorkingToday === false && isworkingThisShift === false) && (empl.fullyBooked !== true) && (empl.hpw >= shift.hours) && (shift.workersRequired > shift.arrayOfWorkers.length) && (newHpw >= shift.hours) && (!shift.arrayOfWorkers.includes(empl))) {
        this.actionOnEmployee(empl, shift);
      }

    });
  }
  actionOnEmployee(employee, shift: Shift) {
    let shiftDay = shift.day.normalize()
    let shiftTimeStart = Number(shift.timeStart)
    let empAvStart = Number(employee.aviability[shiftDay]['0']);
    let empAvFinish = Number(employee.aviability[shiftDay]['1']);
    let isworkingThisShift = this.isWorkinInThisShift(shift, employee);
    if (employee.aviability[shiftDay]['0'] === null) {
      return
    }
    else if ((empAvStart <= shiftTimeStart) &&
      (empAvFinish >= Number(shift.timeFinish)) && (isworkingThisShift === false)) {
      employee.hworked += shift.hours
      shift.arrayOfWorkers.push(employee)
      employee.shiftsWorked.push({ shifthours: shift.hours, shiftDay: shift.day, timeStart: shift.timeStart, timeFinish: shift.timeFinish })
    } else {
      console.log("nadie disponible este dia")

    }
  }

  isWorkinInThisShift(shift, employee) {
    let bool = false
    shift.arrayOfWorkers.forEach((worker) => {
      if (employee._id === worker._id) {
        bool = true
      }
    })
    return bool
  }


  // TOOLS ****************************************************************************************


  avoidEmployeToWorkSameDay(emp, shift: Shift) {
    let bool = false
    emp.shiftsWorked.forEach((element) => {
      if (element.shiftDay === shift.day) {
        bool = true
      }
    })

    //  console.log(bool, "boolean", shift.day)
    return bool
  }



  putShiftDetailsInEmplArrayOfShifts(emp: Employee, shift: Shift) {
    const colleagues = [];
    shift.arrayOfWorkers.forEach((employee) => {
      if (shift.arrayOfWorkers.includes(emp) && emp.name != employee.name) {
        colleagues.push(employee.name)
        emp.colleagues.push(employee.name)
      }
    })
    return colleagues;
  }


  getColleagues(empl, shifts) {
    shifts.forEach((shift) => {
      this.putShiftDetailsInEmplArrayOfShifts(empl, shift)
    })
  }

  putTrulyFullyBookedEmployees(emp) {
    const lowestShift = this.getLowestShiftHours(this.unsavedShifts);
    const empHpwLeft = emp.hpw - emp.hworked;
    if (lowestShift != false && empHpwLeft < lowestShift.hours) {
      emp.fullyBooked = true;
    }
  }


  getLowestShiftHours(shifts: Shift[]) {
    let counter = 0;
    let element1 = shifts[0]
    shifts.forEach(element => {
      if (element.arrayOfWorkers.length >= element.workersRequired) {
        element.fullyBooked = true
      }
      if (element.fullyBooked === true) {
        counter++
      }
      else if (element1.hours > element.hours) {
        element1.hours = element.hours;
      }
    })
    if (counter >= shifts.length) {
      console.log("todas las shifts estan cubiertas")
      return false
    }
    else {

      return element1
    }
  }

  checkIfThereIsAnyOneThatCanWork(shifts): Boolean {
    let boolean = null;
    let counter = 0;
    this.unsavedEmployees.forEach((emp) => {
      let empHpw = emp.hpw - emp.hworked;
      shifts.forEach((shift: Shift) => {
        if (emp.shiftsWorked !== null) {
          emp.shiftsWorked.forEach((empShiftWorked) => {
            if (empShiftWorked.shiftDay !== shift.day && emp.fullyBooked === false && empHpw >= shift.hours && shift.fullyBooked === false) {
              counter++
              boolean = true
            } else {
              boolean = false
            }
          })
        }

      })
    })
    return boolean
  }


  getAllWithLessHoursWorked(arrayOfEmployees) {//////shuffle?
    let personThatWorkedTheLeast = this.getEmployeeThatWorkedTheLeast();
    let peopleThatWorkedTheLeast = arrayOfEmployees.filter(element => {
      return element.hworked <= personThatWorkedTheLeast.hworked;
    });
    return peopleThatWorkedTheLeast
  }
  getEmployeeThatWorkedTheLeast() {
    const closest = this.unsavedEmployees.reduce((acc, emp) => {
      return acc.hworked < emp.hworked ? acc : emp
    });
    return closest
  }

  shuffle(a) {
    if (a != null) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
    }

    return a;
  }



  // DATA SETUP*************************************************


  getEmployees(): any {
    /* Regresamos una promesa que se resuelve hasta que tenemos los datos listos */
    return new Promise((resolve, reject) => {
      this.employeeService.getEmployees().subscribe((responseData) => {
        resolve(responseData);
      });
    });
  }













  //   createCalendarYear(date){
  //     let year = moment().format('Y')
  //     let months = this.getMonths();
  //     let newMonths = [];
  //     let daysInYear = [];


  //     months.forEach((month) => {
  //       let firstDay = moment(month, 'M').startOf('M')
  //        newMonths.push(firstDay)
  //     })

  //     newMonths.forEach((month) => {
  //       let firstDay = moment(month).startOf('M');
  //       let days = Array.apply(null, {length: month.daysInMonth()}).map(Number.call, Number).map((x) => {

  //         return moment(firstDay).add(x, 'd')
  //       }) 

  //       days.forEach((day) => {
  //         daysInYear.push(day)
  //       })
  //       // for(let i = 0; i < firstDay.weekday() -1; i++){
  //        // daysInYear.unshift(null)

  //       // }

  //     })
  //     daysInYear.unshift(null)
  //         return daysInYear
  //   }







  // getWeek(day){
  //   const result = this.daysInYear.filter((element) => {
  //     if(element != null && day.format('Y') === element.format('Y')){
  //       return element.format('W') === day.format('W')
  //     }
  //   })
  //   return result
  // }

  // getMonths(){
  //   const result = Array.apply(0, Array(12)).map(function(_,i){
  //      return moment().month(i).format('M')})
  //  return result
  //  }


  // todayCheck(day){
  //   if(!day){
  //     return false
  //   }
  //   return moment().format('L') === day.format('L')
  // }


  // hoverIsNotNull(day){
  //   if(!day){
  //     return false
  //   }
  //   return day;
  // }






















  // getWeeksInMonth(){ 
  // let date = moment().date()
  // let weeks = moment(date).weeksInYear()
  // return weeks

  // }


  // createCalendar(month){
  //   let firstDay = moment(month).startOf('M');
  //   let days = Array.apply(null, {length: month.daysInMonth()}).map(Number.call, Number).map((x) => {
  //     return moment(firstDay).add(x, 'd')
  //   })
  //   for(let i = 0; i < firstDay.weekday() -1; i++){
  //     days.unshift(null)
  //   }
  //   return days
  // }




  // nextMonth(){
  //   this.date.add(1, 'M');
  //   this.daysArray = this.createCalendar(this.date);
  // }

  // prevMonth(){
  //   this.date.subtract(1, 'M');
  //   this.daysArray = this.createCalendar(this.date);
  // }




}