
# Express, Postgres & Sequelize CRUD Project

This project is a CRUD application built using Express.js, PostgreSQL, and Sequelize ORM. It allows you to perform Create, Read, Update, and Delete operations on Employee, Department, and Designation models. The project also includes functionality for bulk insert operations.

## Requirements

- Node.js (v19 or higher)
- PostgreSQL (v13 or higher)

## Installation

1. Clone the repository:

   \`\`\`shell
   git clone <repository-url>
   \`\`\`

2. Navigate to the project directory:

   \`\`\`shell
   cd Implement Crud Sequelize
   \`\`\`

3. Install the dependencies:

   \`\`\`shell
   npm install
   \`\`\`

4. Set up the database:

   - Create a new PostgreSQL database.
   - Configure the database connection in the \`config/db.js\` file.


5. Start the application:

   \`\`\`shell
   npm start
   \`\`\`

   The application will be running on \`http://localhost:6500\`.

## Models and Endpoints

### Employee

- Attributes:
  - First Name
  - Last Name
  - Email (must be unique)
  - Phone Number (must be unique)

- Endpoints:
  - POST /employee: Create a new employee and also bulk instert this endpoint.
  - PUT /employee/:id: Update an employee by ID.
  - DELETE /employee/:id: Delete an employee by ID.

### Department

- Attributes:
  - Name
  - Type (Tech or Non-Tech)

- Endpoints:
  - POST /department: Create a new department and also bulk instert this endpoint.
  - PUT /department/:id: Update a department by ID.
  - DELETE /department/:id: Delete a department by ID.

### Designation

- Attributes:
  - Name

- Endpoints:
  - POST /designations: Create a new designation and also bulk instert this endpoint.
  - PUT /designations/:id: Update a designation by ID.
  - DELETE /designations/:id: Delete a designation by ID.

### Bulk Insert

You can perform bulk inserts by using the provided endpoints for each model. Prepare an array of objects representing the data you want to insert, and send a POST request to the corresponding endpoint:

- POST /employees: Bulk insert employees.
- POST /department: Bulk insert departments.
- POST /designation: Bulk insert designations.

Make sure that the request body follows the required structure for each model.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

