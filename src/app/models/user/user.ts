export class User {
    constructor(email: string, password: string, initials: string, role: Role) {}
}

enum Role {
    Teacher = 'Teacher',
    Student = 'Student'
}
