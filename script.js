  // ASSIGNMENT 1
  function celsiusToFahrenheit() {
    let c = document.getElementById("celsius").value;
    if (c == "") {
      document.getElementById("resultCelsiusFahrenheit").innerHTML = "Please enter a value.";
      return;
    }
    c = parseFloat(c);
    let f = (c * 9 / 5) + 32; // FORMULA SA Celsius TO Fahrenheit 
    document.getElementById("resultCelsiusFahrenheit").innerHTML = c + " &deg;C = " + f.toFixed(2) + " &deg;F";
  }

  function fahrenheitToCelsius() {
      var f = document.getElementById("fahrenheit").value;
      if (f == "") {
          document.getElementById("resultFahrenheitCelsius").innerHTML = "Please enter a value.";
          return;
      }
      f = parseFloat(f);
      var c = (f - 32) * 5 / 9; // FORMULA SA Fahrenheit TO Celsius
      document.getElementById("resultFahrenheitCelsius").innerHTML = f + " &deg;F = " + c.toFixed(2) + " &deg;C";
  }

  function metersToFeet() {
      var m = document.getElementById("meters").value;
      if (m == "") {
          document.getElementById("resultMetersFeet").innerHTML = "Please enter a value.";
          return;
      }
      m = parseFloat(m);
      var ft = m * 3.28084; // FORMULA SA Meters TO Feet
      document.getElementById("resultMetersFeet").innerHTML = m + " m = " + ft.toFixed(2) + " ft";
  }

  function feetToMeters() {
      var ft = document.getElementById("feet").value;
      if (ft == "") {
          document.getElementById("resultFeetMeters").innerHTML = "Please enter a value.";
          return;
      }
      ft = parseFloat(ft);
      var m = ft / 3.28084; // FORMULA SA Feet TO Meters
      document.getElementById("resultFeetMeters").innerHTML = ft + " ft = " + m.toFixed(2) + " m";
  }

  // ASSIGNMENT 2
  function computeTax() {
    let income = document.getElementById("income").value;
    let tax;

    if (income == "" || income < 0) {
        document.getElementById("resultTax").innerHTML = "Please enter a valid income.";
        return;
    }

    income = parseFloat(income);

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 400000) {
        tax = (income - 250000) * 0.15;
    } else if (income <= 800000) {
        tax = 22500 + (income - 400000) * 0.20;
    } else if (income <= 2000000) {
        tax = 102500 + (income - 800000) * 0.25;
    } else if (income <= 8000000) {
        tax = 402500 + (income - 2000000) * 0.30;
    } else {
        tax = 2202500 + (income - 8000000) * 0.35;
    }

    let net = income - tax;

    document.getElementById("resultTax").innerHTML =
        "Annual Income: PHP " + income.toFixed(2) + "<br>" +
        "Income Tax: PHP " + tax.toFixed(2) + "<br>" +
        "Income After Tax: PHP " + net.toFixed(2);
  }

  // ASSIGNMENT 3
  function getN() {
    let n = document.getElementById("n").value;
    if (n == "" || n < 1 || n != Math.floor(n)) {
        document.getElementById("resultLoops").innerHTML = "Please enter a positive whole number.";
        return -1;
    }
    return parseInt(n);
  }

  // factorial using while loop
  function factorial() {
      let n = getN();
      if (n == -1) {
          return;
      }

      let i = 1;
      let fact = 1;
      let steps = "";

      while (i <= n) {
          fact = fact * i;
          steps = steps + i;
          if (i < n) {
              steps = steps + " x ";
          }
          i++;
      }

      document.getElementById("resultLoops").innerHTML =
          "Factorial (while loop)<br>" +
          n + "! = " + steps + " = " + fact;
  }

  // sum using do while loop
  function sum() {
      let n = getN();
      if (n == -1) {
          return;
      }

      let i = 1;
      let total = 0;
      let steps = "";

      do {
          total = total + i;
          steps = steps + i;
          if (i < n) {
              steps = steps + " + ";
          }
          i++;
      } while (i <= n);

      document.getElementById("resultLoops").innerHTML =
          "Sum (do while loop)<br>" +
          steps + " = " + total;
  }

  // average using for loop
  function average() {
      let n = getN();
      if (n == -1) {
          return;
      }

      let total = 0;

      for (var i = 1; i <= n; i++) {
          total = total + i;
      }

      let ave = total / n;

      document.getElementById("resultLoops").innerHTML =
          "Average (for loop)<br>" +
          "Sum = " + total + "<br>" +
          "Average = " + total + " / " + n + " = " + ave.toFixed(2);
  }

  // ASSIGNMENT 4
  function computePay() {
      let name = document.getElementById("name").value.trim();
      let hours = document.getElementById("hours").value;
      let rate = document.getElementById("rate").value;

      if (name == "" || hours == "" || rate == "" || hours <= 0 || rate <= 0) {
          document.getElementById("resultPayroll").innerHTML = "Please fill in all fields with valid values.";
          return;
      }

      hours = parseFloat(hours);
      rate = parseFloat(rate);

      let regHours;
      let otHours;

      // First 40 hours is regular, anything more is overtime (1.5x)
      if (hours > 40) {
          regHours = 40;
          otHours = hours - 40;
      } else {
          regHours = hours;
          otHours = 0;
      }

      let regPay = regHours * rate;
      let otPay = otHours * rate * 1.5;
      let gross = regPay + otPay;

      // Deductions
      let sss = gross * 0.045;
      let philhealth = gross * 0.025;
      let pagibig = gross * 0.02;
      let totalDed = sss + philhealth + pagibig;

      let net = gross - totalDed;

      document.getElementById("resultPayroll").innerHTML =
          "<b>Employee: " + name + "</b><br>" +
          "Regular Pay (" + regHours + " hrs): PHP " + regPay.toFixed(2) + "<br>" +
          "Overtime Pay (" + otHours + " hrs): PHP " + otPay.toFixed(2) + "<br>" +
          "Gross Pay: PHP " + gross.toFixed(2) + "<br>" +
          "SSS (4.5%): PHP " + sss.toFixed(2) + "<br>" +
          "PhilHealth (2.5%): PHP " + philhealth.toFixed(2) + "<br>" +
          "Pag-IBIG (2%): PHP " + pagibig.toFixed(2) + "<br>" +
          "Total Deductions: PHP " + totalDed.toFixed(2) + "<br>" +
          "<b>Net Pay: PHP " + net.toFixed(2) + "</b>";
  }

  function clearAll() {
      document.getElementById("name").value = "";
      document.getElementById("hours").value = "";
      document.getElementById("rate").value = "";

      document.getElementById("resultPayroll").innerHTML =
          "<span>Employee: ?</span><br>" +
          "Regular Pay (hrs): ?<br>" +
          "Overtime Pay (hrs): ?<br>" +
          "Gross Pay: ?<br>" +
          "SSS (4.5%): ?<br>" +
          "PhilHealth (2.5%): ?<br>" +
          "Pag-IBIG (2%): ?<br>" +
          "Total Deductions: ?<br>" +
          "<span>Net Pay: ?</span>";
  }
