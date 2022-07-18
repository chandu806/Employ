// Consider following use case:
 

// A company has multiple departments. each department has N number of employees.
//  Each Employee has their saving account in which a fixed salary is credited.

//  Construct a relational table schema of above given use case and write MySQL queries for following:

 

// Get no of employees for each department
// Get employee with maximum salary for each department
// Get employee with second maximum salary in entire company
 

////*******A */
select count {
    depart name from Tablename
}
/////****B */

select max {
    departname from Tablename
}
/////***C */
select maximum {
    *from Tablename
}