document.write("Helló");
document.write("<h1>Helló</h1>");
var a = 42;
a = "alma";
a = 43;
if (a % 2 == 0) {
    document.write("a ", a, " páros");
} else {
    document.write("a ", a, " páratlan");
}
document.write("<br>");
a = prompt("Kérek egy számot! ");
if (a % 2 == 0) {
    document.write("a ", a, " páros");
} else {
    document.write("a ", a, " páratlan");
}
document.write("<br>");
a = prompt("Kérek egy számot! ");
if (Math.floor(a) == a) {
    if (a % 2 == 0) {
        document.write("a ", a, " páros");
    } else {
        document.write("a ", a, " páratlan");
    }
} else {
    document.write("nem egész számot adtál meg");
}
document.write("<br>");
a = prompt("Kérek egy számot! ");
if (isFinite(a)) {
    if (Math.floor(a) == a) {
        if (a % 2 == 0) {
            document.write("a ", a, " páros");
        } else {
            document.write("a ", a, " páratlan");
        }
    } else {
        document.write("nem egész számot adtál meg");
    }
} else {
    document.write("nem számot adtál meg");
}