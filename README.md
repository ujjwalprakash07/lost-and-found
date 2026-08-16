# Lost & Found

A web-based Lost & Found system designed to help users report lost and found items, identify possible matches, verify ownership, and complete the return process.

## 🚧 Project Status

Currently under development.

The project is being built step-by-step as a full-stack application.

### Current Progress

- [x] Initial project setup
- [x] Login page UI
- [x] Lost & Found landing/login interface
- [x] User registration
- [ ] Authentication
- [ ] Lost item reporting
- [ ] Found item reporting
- [ ] Search and filtering
- [ ] Matching system
- [ ] Claim system
- [ ] Ownership verification
- [ ] Handover system
- [ ] User history
- [ ] Reputation/score system
- [ ] Notifications
- [ ] Admin panel
- [ ] Backend
- [ ] Database
- [ ] Deployment

## 🎯 Project Goal

The goal is to create a system where:

1. A user reports a lost item.
2. Another user can report a found item.
3. The system compares details from both reports.
4. Possible matches are generated.
5. The owner can claim a possible match.
6. Ownership is verified using additional identifying information.
7. The item is handed back to the owner.
8. The successful return is recorded in the user's history.

## 🔑 Planned Features

### User Authentication
- User registration
- Login/logout
- Password recovery
- User profile

### Lost Item Reports
Users will be able to provide:

- Item type
- Brand
- Colour
- Size
- Location
- Date and time
- Special identifying marks
- Cover/accessories
- Additional details
- Images/videos

### Found Item Reports

Users who find an item can submit similar information so that the system can compare it with lost-item reports.

### Matching System

The system will compare characteristics such as:

- Item type
- Brand
- Colour
- Location
- Date/time
- Cover
- Special marks
- Other identifying characteristics

The first version will use rule-based matching. More advanced matching may be added later.

### Ownership Verification

Possible matches will require additional verification before an item is handed over.

Sensitive information such as passwords or PINs will **not** be stored by the application.

### Handover

After successful verification:

```text
Match
  ↓
Claim
  ↓
Verification
  ↓
Handover
  ↓
Case Closed
