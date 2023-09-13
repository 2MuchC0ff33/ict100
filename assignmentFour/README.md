# Process Definition Document: Restaurant Automation

## Process Description
The Restaurant Automation process aims to streamline restaurant operations by incorporating three key functions: Roboceptionist, Restaurant Robot Waiters, and Robot Chef. This process encompasses the automation of booking inquiries, efficient table service management, and the preparation of food orders.

## Process Steps

### Roboceptionist
1. **Input:** Booking Enquiry
   - A booking enquiry string is received.
2. **Initialize:**
   - Initialize `bookingName`, `bookingTime`, and `bookingNumber` to null.
3. **Split:**
   - Split the booking enquiry string by spaces into individual words.
4. **Parse Information:**
   - For each word in the words:
     - If the word contains "reservation," set `bookingName` to the word after "for."
     - If the word contains "at," set `bookingTime` to the word after it.
     - If the word is a number, set `bookingNumber` to the word.
5. **Output:** Booking Information
   - Create a result object with properties:
     - `bookingName`: bookingName
     - `bookingTime`: bookingTime
     - `bookingNumber`: bookingNumber
   - Return the result object.

### Restaurant Robot Waiters
1. **Input:** Robot ID, Table ID
2. **Try to Acquire Robot:**
   - Attempt to acquire the target robot with ID `robotID`.
3. **If Successful:**
   - Teleport the robot to the destination table with ID `tableID`.
4. **Catch RobotAcquisitionError:**
   - If unable to acquire the robot:
     - Check if the robot attending the destination table is 'misplaced.'
     - If it's misplaced:
       - Acquire the 'misplaced' robot.
       - Release the 'misplaced' robot to a random unattended table.
       - Attempt to acquire the target robot with ID `robotID`.
       - If successful, teleport the robot to the destination table with ID `tableID`.
5. **Finally:**
   - Release the target robot if acquired.

### Robot Chef
1. **Initialize Variables:**
   - Initialize `ordersList` to store the list of orders to cook.
   - Initialize `cleanPlates` to 2 (number of clean plates available).
   - Initialize `dirtyPlate` to false.
2. **Subscribe to Sensors:**
   - Subscribe to 'temperature_sensor' and 'stove_clock' topics.
   - Subscribe to 'weight_sensor' topic.
3. **Retrieve Orders:**
   - Retrieve the list of orders to cook from the kitchenController.
4. **For Each Order in ordersList:**
   - If `cleanPlates` is 0, clean dirty plates.
   - Retrieve steak and side information from the order.
   - Cook the steak.
   - Cook the side.
   - Plate the meal (if clean plates are available).
5. **Unsubscribe from Sensors:**
   - Unsubscribe from all sensor topics.

## Business Rules
- In the Roboceptionist step, the booking information is extracted based on specific keywords in the booking enquiry.
- In the Restaurant Robot Waiters step, the process ensures that robots are teleported to tables without conflicts or deadlocks.
- In the Robot Chef step, only a limited number of clean plates are available, and dirty plates must be cleaned before plating.

## Data Requirements
- Booking Enquiry String (Roboceptionist)
- Robot ID and Table ID (Restaurant Robot Waiters)
- Orders List, Steak, Side, Cooking Information (Robot Chef)
- Temperature, Stove Clock, Weight Sensor Data (Robot Chef)

## Roles and Responsibilities
- Roboceptionist: Parses booking enquiries and extracts booking information.
- Restaurant Robot Waiters: Teleports robots to tables, manages robot acquisitions.
- Robot Chef: Prepares and cooks food orders, manages inventory of plates.

## Timing and Sequencing
- The Roboceptionist process triggers when a booking enquiry is received.
- The Restaurant Robot Waiters process handles robot teleportation to tables.
- The Robot Chef process runs for each order in the list, with dependencies on plate availability and cooking times.

## Exception Handling
- Roboceptionist handles parsing errors.
- Restaurant Robot Waiters handle robot acquisition and teleportation errors.
- Robot Chef handles plate availability and cooking errors.

## Performance Metrics
- Key performance indicators include:
  - Roboceptionist: Parsing accuracy.
  - Restaurant Robot Waiters: Successful robot teleportations.
  - Robot Chef: Order completion rate, cooking efficiency.

## Integration Points
- Roboceptionist interacts with booking enquiries.
- Restaurant Robot Waiters interact with the restaurantController for robot management.
- Robot Chef interacts with the kitchenController for order and sensor data.

## Decision Points
- Roboceptionist makes decisions based on keyword detection in booking enquiries.
- Restaurant Robot Waiters make decisions on robot acquisition and teleportation.
- Robot Chef makes decisions on plate availability and cooking times.

## Stakeholder Communication
- Stakeholders are informed through logging using console.log or a global log function.
- Notifications or alerts can be added as needed.

## Version Control
- Maintain version control for process documentation to track revisions and updates.