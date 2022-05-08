// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "In MS-Excel formula starts with ____ sign.",
    answer: "=",
    options: [
      "#",
      "=",
      "$",
      "no"
    ]
  },
    {
    numb: 2,
    question: "The cell having bold boundary is the ____ cell. ",
    answer: "active",
    options: [
      "active",
      "last",
      "next",
      "previous"
    ]
  },
    {
    numb: 3,
    question: "The extension with which you save Excel worksheets is ____.",
    answer: ".xlsx",
    options: [
      ".docx",
      ".pptx",
      ".txt",
      ".xlsx"
    ]
  },
    {
    numb: 4,
    question: "The keyboard shortcut for Copy is ____ and for Paste is ____.",
    answer: "Ctrl+C, Ctrl+V",
    options: [
      "Ctrl+X, Ctrl+Z",
      "Alt+C, Alt+V",
      "Win+C, Win+V",
      "Ctrl+C, Ctrl+V"
    ]
  },
    {
    numb: 5,
    question: "If you enter 12+24 in a cell, Excel will display ____.",
    answer: "12+24 ",
    options: [
      "A12+A24",
      "36",
      "12+24 ",
      "Error"
    ]
  },
    {
    numb: 6,
    question: "Address of the cell at 20th Column and 30th Row is ____.",
    answer: "T30",
    options: [
      "20,30",
      "T30",
      "J20",
      "30T"
    ]
  },
    {
    numb: 7,
    question: "The formula in cell A2 is =B2+C3. On copying this formula to cell C2, the formula in cell C2 will be ____. ",
    answer: "=D2+E3",
    options: [
      "=B2+C3",
      "=D2+E3",
      "B2+C3",
      "D2+E3"
    ]
  },
    {
    numb: 8,
    question: "What does an electronic spreadsheet consists of ",
    answer: "All the above",
    options: [
      "Rows",
      "Columns",
      "Cells",
      "All the above"
    ]
  },
    {
    numb: 9,
    question: "I am a pictorial representation of worksheet data. Who am I ?",
    answer: "Chart",
    options: [
      "Flowgraph",
      "Chart",
      "Picture",
      "Graphic"
    ]
  },
    {
    numb: 10,
    question: "To format size of text in a worksheet, which group will you select from the Home tab?",
    answer: "Font",
    options: [
      "Cells",
      "Number",
      "Font",
      "Alignment"
    ]
  },
    {
    numb: 11,
    question: "To fill a series, the command is Home tab => ____ group => ____ => series.",
    answer: "Editing, Fill",
    options: [
      "Cells, Format",
      "Styles, Conditional Formatting",
      "Alignment, Wrap text ",
      "Editing, Fill"
    ]
  },
    {
    numb: 12,
    question: "Function that is used to find the largest value in a set of values is ____ .",
    answer: "=MAX(B1:B3)",
    options: [
      "=HIGH(B1:B3)",
      "=MAXIMUM(B1:B3)",
      "=MAX(B1:B3)",
      "None of the above"
    ]
  },
    {
    numb: 13,
    question: "Function that adds all the numbers in a range of cells is ____ .",
    answer: "=SUM(A1,A3)",
    options: [
      "=SUMMATION(A1,A3)",
      "=ADD(A1,A3)",
      "=PLUS(A1,A3)",
      "=SUM(A1,A3)"
    ]
  },
    {
    numb: 14,
    question: "Function that returns the average of the arguments is ____ .",
    answer: "=AVG(C1,D2:D5)",
    options: [
      "=MEAN(C1,D2:D5)",
      "=DIVIDE(C1,D2:D5)",
      "= AVERAGE(C1,D2:D5)",
      "=AVG(C1,D2:D5)"
    ]
  },
    {
    numb: 15,
    question: "The function =COUNT(A2:C2,6,9.2) will return ____ in Excel.Given that cell A2 contains value 11/11/2011, B2 contains value “Excel” and C2 is an empty cell.",
    answer: "3",
    options: [
      "1",
      "2",
      "5",
      "3"
    ]
  },


  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
