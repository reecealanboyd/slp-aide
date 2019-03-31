import { Assignment } from '../assignment/assignment';
import { Attempt } from '../attempt/attempt';

export class Student {
    constructor(initials: string, email: string, assignments?: Assignment[], attempts?: Attempt[]) {}
}
