const categories = {
  Geography: [
    {
      question: "Which is the largest continent by area?",
      options: ["Africa", "Asia", "North America", "Europe"],
      answer: "Asia",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: "Canberra",
    },
    {
      question: "Which is the longest river in the world?",
      options: [
        "Amazon River",
        "Yangtze River",
        "Mississippi River",
        "Nile River",
      ],
      answer: "Nile River",
    },
    {
      question: "Which country has the most natural lakes?",
      options: ["Canada", "Russia", "USA", "Brazil"],
      answer: "Canada",
    },
    {
      question: "Mount Everest is located in which country?",
      options: ["India", "Nepal", "China", "Bhutan"],
      answer: "Nepal",
    },
    {
      question: "Which desert is the largest in the world?",
      options: [
        "Sahara Desert",
        "Gobi Desert",
        "Antarctic Desert",
        "Kalahari Desert",
      ],
      answer: "Antarctic Desert",
    },
    {
      question: "Which ocean is the deepest?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
    {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      options: ["China", "Japan", "Thailand", "South Korea"],
      answer: "Japan",
    },
    {
      question: "Which is the smallest country in the world by area?",
      options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
      answer: "Vatican City",
    },
    {
      question: "What is the largest island in the world?",
      options: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
      answer: "Greenland",
    },
    {
      question: "Which U.S. state has the longest coastline?",
      options: ["Florida", "California", "Alaska", "Hawaii"],
      answer: "Alaska",
    },
    {
      question: "Which country has the highest population?",
      options: ["India", "China", "USA", "Indonesia"],
      answer: "China",
    },
    {
      question: "Which is the largest desert in Africa?",
      options: [
        "Kalahari Desert",
        "Sahara Desert",
        "Namib Desert",
        "Libyan Desert",
      ],
      answer: "Sahara Desert",
    },
    {
      question: "Which of these countries is landlocked?",
      options: ["Thailand", "Mongolia", "Bangladesh", "Vietnam"],
      answer: "Mongolia",
    },
    {
      question: "Which river flows through Egypt?",
      options: ["Amazon", "Nile", "Ganges", "Danube"],
      answer: "Nile",
    },
    {
      question: "Which is the longest mountain range in the world?",
      options: ["Himalayas", "Rocky Mountains", "Andes", "Alps"],
      answer: "Andes",
    },
    {
      question: "Which African country has the most pyramids?",
      options: ["Egypt", "Sudan", "Algeria", "Ethiopia"],
      answer: "Sudan",
    },
    {
      question: "What is the capital city of Canada?",
      options: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
      answer: "Ottawa",
    },
    {
      question: "Which city is known as 'The Big Apple'?",
      options: ["Los Angeles", "San Francisco", "Chicago", "New York City"],
      answer: "New York City",
    },
    {
      question: "Which is the largest freshwater lake in the world by volume?",
      options: ["Lake Superior", "Lake Victoria", "Caspian Sea", "Lake Baikal"],
      answer: "Lake Baikal",
    },
    {
      question: "Which country has the most time zones?",
      options: ["Russia", "USA", "France", "China"],
      answer: "France",
    },
    {
      question: "Which is the highest waterfall in the world?",
      options: [
        "Niagara Falls",
        "Angel Falls",
        "Victoria Falls",
        "Iguazu Falls",
      ],
      answer: "Angel Falls",
    },
    {
      question: "What is the only continent that contains no deserts?",
      options: ["Europe", "Asia", "South America", "Antarctica"],
      answer: "Europe",
    },
    {
      question: "What is the longest canal in the world?",
      options: ["Suez Canal", "Panama Canal", "Grand Canal", "Erie Canal"],
      answer: "Grand Canal",
    },
    {
      question: "What is the deepest point in the ocean?",
      options: [
        "Mariana Trench",
        "Tonga Trench",
        "Java Trench",
        "Puerto Rico Trench",
      ],
      answer: "Mariana Trench",
    },
  ],
  Programming: [
    {
      question:
        "Which programming language is primarily used for web development?",
      options: ["C++", "Python", "JavaScript", "Swift"],
      answer: "JavaScript",
    },
    {
      question: "Which keyword is used to define a function in JavaScript?",
      options: ["function", "def", "define", "fun"],
      answer: "function",
    },
    {
      question: "Which data structure uses LIFO (Last In, First Out)?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      answer: "Stack",
    },
    {
      question: "Which operator is used for exponentiation in Python?",
      options: ["^", "**", "*", "//"],
      answer: "**",
    },
    {
      question:
        "Which programming language is mainly used for artificial intelligence and machine learning?",
      options: ["C#", "Java", "Python", "Ruby"],
      answer: "Python",
    },
    {
      question:
        "Which method is used to add an element at the end of an array in JavaScript?",
      options: ["push()", "append()", "insert()", "add()"],
      answer: "push()",
    },
    {
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: "O(log n)",
    },
    {
      question: "Which data type is not primitive in Java?",
      options: ["int", "boolean", "string", "char"],
      answer: "string",
    },
    {
      question: "Which symbol is used for single-line comments in Python?",
      options: ["//", "#", "--", "/* */"],
      answer: "#",
    },
    {
      question: "What is the default return type of a function in C?",
      options: ["void", "int", "float", "char"],
      answer: "int",
    },
    {
      question: "Which keyword is used for exception handling in Java?",
      options: ["throw", "catch", "try", "try-catch"],
      answer: "try-catch",
    },
    {
      question: "Which HTML tag is used to include JavaScript code?",
      options: ["<script>", "<js>", "<javascript>", "<code>"],
      answer: "<script>",
    },
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Sequential Query Language",
        "Standard Query Language",
        "Simple Query Language",
      ],
      answer: "Structured Query Language",
    },
    {
      question:
        "Which sorting algorithm has the worst-case time complexity of O(n²)?",
      options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
      answer: "Bubble Sort",
    },
    {
      question:
        "Which method is used to remove the last element from an array in JavaScript?",
      options: ["pop()", "shift()", "splice()", "slice()"],
      answer: "pop()",
    },
    {
      question: "Which of the following is an interpreted language?",
      options: ["C++", "Java", "Python", "Rust"],
      answer: "Python",
    },
    {
      question:
        "Which protocol is used for secure communication over the internet?",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      answer: "HTTPS",
    },
    {
      question: "Which data structure is used to implement recursion?",
      options: ["Queue", "Stack", "Array", "Heap"],
      answer: "Stack",
    },
    {
      question: "Which function is used to print output in C?",
      options: ["cout", "print()", "printf()", "println()"],
      answer: "printf()",
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: ["var", "let", "const", "define"],
      answer: "const",
    },
    {
      question: "Which of the following is a NoSQL database?",
      options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
      answer: "MongoDB",
    },
    {
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "Global object",
        "Current function",
        "Current object",
        "Window object",
      ],
      answer: "Current object",
    },
    {
      question: "Which keyword is used for inheritance in Java?",
      options: ["implements", "extends", "inherits", "super"],
      answer: "extends",
    },
    {
      question: "Which of the following is a backend framework?",
      options: ["React", "Django", "Vue", "Bootstrap"],
      answer: "Django",
    },
  ],
  Entertainment: [
    {
      question:
        "Who played the character of Iron Man in the Marvel Cinematic Universe?",
      options: [
        "Chris Hemsworth",
        "Robert Downey Jr.",
        "Chris Evans",
        "Tom Holland",
      ],
      answer: "Robert Downey Jr.",
    },
    {
      question: "Which is the highest-grossing movie of all time (as of 2024)?",
      options: ["Avatar", "Avengers: Endgame", "Titanic", "The Lion King"],
      answer: "Avatar",
    },
    {
      question: "Who is known as the 'King of Pop'?",
      options: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
      answer: "Michael Jackson",
    },
    {
      question: "Which TV series features the fictional continent of Westeros?",
      options: [
        "Vikings",
        "Game of Thrones",
        "The Witcher",
        "Lord of the Rings: The Rings of Power",
      ],
      answer: "Game of Thrones",
    },
    {
      question: "Which animated movie features a song called 'Let It Go'?",
      options: ["Moana", "Frozen", "Tangled", "Cinderella"],
      answer: "Frozen",
    },
    {
      question: "Who directed the movie 'Inception'?",
      options: [
        "Steven Spielberg",
        "James Cameron",
        "Christopher Nolan",
        "Quentin Tarantino",
      ],
      answer: "Christopher Nolan",
    },
    {
      question: "Which superhero is known as the 'Caped Crusader'?",
      options: ["Superman", "Batman", "Spider-Man", "Iron Man"],
      answer: "Batman",
    },
    {
      question: "What is the name of Harry Potter’s pet owl?",
      options: ["Fawkes", "Hedwig", "Crookshanks", "Scabbers"],
      answer: "Hedwig",
    },
    {
      question: "Who won the first season of 'American Idol'?",
      options: [
        "Jennifer Hudson",
        "Carrie Underwood",
        "Kelly Clarkson",
        "Adam Lambert",
      ],
      answer: "Kelly Clarkson",
    },
    {
      question: "Which band released the hit song 'Bohemian Rhapsody'?",
      options: ["The Beatles", "Queen", "Led Zeppelin", "The Rolling Stones"],
      answer: "Queen",
    },
    {
      question: "Who voices the character of Woody in 'Toy Story'?",
      options: ["Tom Hanks", "Tim Allen", "Robin Williams", "Chris Pratt"],
      answer: "Tom Hanks",
    },
    {
      question:
        "Which TV series is set in the fictional town of Hawkins, Indiana?",
      options: [
        "Riverdale",
        "Stranger Things",
        "Supernatural",
        "The Vampire Diaries",
      ],
      answer: "Stranger Things",
    },
    {
      question: "Which actor played the Joker in 'The Dark Knight' (2008)?",
      options: [
        "Joaquin Phoenix",
        "Heath Ledger",
        "Jared Leto",
        "Jack Nicholson",
      ],
      answer: "Heath Ledger",
    },
    {
      question:
        "What is the highest-grossing animated movie of all time (as of 2024)?",
      options: ["Frozen II", "The Lion King (2019)", "Minions", "Toy Story 4"],
      answer: "The Lion King (2019)",
    },
    {
      question: "Which actress played the lead role in 'Wonder Woman' (2017)?",
      options: [
        "Scarlett Johansson",
        "Brie Larson",
        "Gal Gadot",
        "Anne Hathaway",
      ],
      answer: "Gal Gadot",
    },
    {
      question: "Which artist released the album 'Thriller'?",
      options: ["Madonna", "Michael Jackson", "Prince", "Elton John"],
      answer: "Michael Jackson",
    },
    {
      question:
        "What is the name of the fictional African country in 'Black Panther'?",
      options: ["Zamunda", "Wakanda", "Latveria", "Genosha"],
      answer: "Wakanda",
    },
    {
      question: "Who is the host of 'The Tonight Show' (as of 2024)?",
      options: [
        "Jimmy Fallon",
        "Stephen Colbert",
        "James Corden",
        "Jimmy Kimmel",
      ],
      answer: "Jimmy Fallon",
    },
    {
      question: "Which famous magician is known for his escape acts?",
      options: ["David Copperfield", "Harry Houdini", "Criss Angel", "Dynamo"],
      answer: "Harry Houdini",
    },
    {
      question: "Which film features the famous quote 'I'll be back'?",
      options: ["The Terminator", "Die Hard", "RoboCop", "Predator"],
      answer: "The Terminator",
    },
    {
      question:
        "Which video game franchise features characters like Mario, Luigi, and Bowser?",
      options: [
        "The Legend of Zelda",
        "Super Mario",
        "Sonic the Hedgehog",
        "Donkey Kong",
      ],
      answer: "Super Mario",
    },
    {
      question: "What is the name of the theme song for 'Friends'?",
      options: [
        "I'll Stand By You",
        "With a Little Help from My Friends",
        "I’ll Be There for You",
        "Thank You for Being a Friend",
      ],
      answer: "I’ll Be There for You",
    },
    {
      question:
        "Which director is famous for movies like 'Pulp Fiction' and 'Kill Bill'?",
      options: [
        "Martin Scorsese",
        "Quentin Tarantino",
        "Steven Spielberg",
        "James Cameron",
      ],
      answer: "Quentin Tarantino",
    },
    {
      question:
        "Which show features a chemistry teacher who turns into a drug dealer?",
      options: ["Narcos", "Breaking Bad", "Better Call Saul", "Money Heist"],
      answer: "Breaking Bad",
    },
    {
      question: "Which musician is known for the song 'Shape of You'?",
      options: ["Justin Bieber", "Ed Sheeran", "Shawn Mendes", "Bruno Mars"],
      answer: "Ed Sheeran",
    },
  ],
  Mathematics: [
    {
      question: "What is the value of π (pi) approximately?",
      options: ["2.14", "3.14", "4.14", "5.14"],
      answer: "3.14",
    },
    {
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
    {
      question: "What is the sum of angles in a triangle?",
      options: ["90°", "120°", "180°", "360°"],
      answer: "180°",
    },
    {
      question: "What is 7 × 8?",
      options: ["42", "48", "54", "56"],
      answer: "56",
    },
    {
      question: "What is the value of 5! (5 factorial)?",
      options: ["60", "100", "120", "150"],
      answer: "120",
    },
    {
      question: "What is the value of 2³?",
      options: ["4", "6", "8", "10"],
      answer: "8",
    },
    {
      question: "What is the next prime number after 7?",
      options: ["9", "10", "11", "13"],
      answer: "11",
    },
    {
      question: "If a circle has a radius of 5 cm, what is its diameter?",
      options: ["5 cm", "10 cm", "15 cm", "20 cm"],
      answer: "10 cm",
    },
    {
      question: "What is 15% of 200?",
      options: ["15", "30", "45", "60"],
      answer: "30",
    },
    {
      question: "Which number is the additive identity?",
      options: ["0", "1", "-1", "10"],
      answer: "0",
    },
    {
      question: "What is the perimeter of a square with side length 7 cm?",
      options: ["14 cm", "21 cm", "28 cm", "35 cm"],
      answer: "28 cm",
    },
    {
      question: "What is the value of 2 + 2 × 3?",
      options: ["8", "10", "12", "6"],
      answer: "8",
    },
    {
      question: "What is the greatest common divisor (GCD) of 18 and 24?",
      options: ["2", "3", "6", "9"],
      answer: "6",
    },
    {
      question: "What is the least common multiple (LCM) of 4 and 6?",
      options: ["6", "12", "18", "24"],
      answer: "12",
    },
    {
      question: "What is the formula for the area of a rectangle?",
      options: [
        "length + width",
        "length × width",
        "2 × (length + width)",
        "length / width",
      ],
      answer: "length × width",
    },
    {
      question:
        "What is the missing number in the sequence: 2, 4, 8, 16, __, 64?",
      options: ["24", "30", "32", "48"],
      answer: "32",
    },
    {
      question: "What is the sum of the first 10 natural numbers?",
      options: ["30", "45", "55", "60"],
      answer: "55",
    },
    {
      question: "What is 1/2 + 1/3?",
      options: ["1/5", "5/6", "2/5", "7/6"],
      answer: "5/6",
    },
    {
      question: "If a² = 49, what is the value of a?",
      options: ["7", "-7", "Both 7 and -7", "None of these"],
      answer: "Both 7 and -7",
    },
    {
      question: "What is the cube root of 27?",
      options: ["2", "3", "4", "5"],
      answer: "3",
    },
    {
      question:
        "If the radius of a sphere is doubled, how many times will its volume increase?",
      options: ["2 times", "4 times", "6 times", "8 times"],
      answer: "8 times",
    },
    {
      question: "How many sides does a hexagon have?",
      options: ["4", "5", "6", "7"],
      answer: "6",
    },
    {
      question: "What is the value of log₁₀(1000)?",
      options: ["1", "2", "3", "4"],
      answer: "3",
    },
    {
      question:
        "What is the probability of getting heads when flipping a fair coin?",
      options: ["1/2", "1/3", "1/4", "1"],
      answer: "1/2",
    },
    {
      question: "If x + 5 = 12, what is the value of x?",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
  ],
};
