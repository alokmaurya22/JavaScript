const month = 3
switch (month) {
    case 1:
        monthname = "Jan";
        break;
    case 2:
        monthname = "Feb";
        break;
    case 3:
        monthname = "Mar";
        break;
    case 4:
        monthname = "Apr";
        break;
    case 5:
        monthname = "May";
        break;

    default:
        console.log("Invalid month");
        break;
}
console.log(`Month is ${monthname}`)